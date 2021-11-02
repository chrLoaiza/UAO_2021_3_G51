import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

// We use rest operator (...) to store the remaining properties
export function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed. ", error);
      });
    } else {
      //This will copy the course passed in on props
      //to state anytime a new course is passed in.
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed. ", error);
      });
    }
    //}, []); //The empty array makes the courses only runs once, it like do a componentDidMount
  }, [props.course]); // Update any time new course is passed in on props

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { title, authorId, category } = course;
    const errs = {};

    if (!title) errs.title = "Title is required.";
    if (!authorId) errs.author = "Author is required.";
    if (!category) errs.category = "Category is required.";

    setErrors(errs);

    //Form is valid when errs does not have propierties.
    return Object.keys(errs) == 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) {
      return;
    }
    setSaving(true);
    // Course it passed by prop
    saveCourse(course)
      .then(() => {
        //history redirect
        toast.success("Course Saved.");
        history.push("/courses");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    ></CourseForm>
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  // Any component loaded vit <Route> gets history
  // passes in in porops from react router
  history: PropTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
  // This is a redux selector
  return courses.find((course) => course.slug === slug) || null;
}

//Own props acces properties from components props
function mapStateToProps(state, ownProps) {
  //This line works because App.js has Route component
  // as path="course/:slug", this make slug available
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

// When we use mapDispatchToProps as an object
// Redix injects dispatch by itself
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
