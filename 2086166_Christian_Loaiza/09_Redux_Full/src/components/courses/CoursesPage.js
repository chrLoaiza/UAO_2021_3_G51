import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed. ", error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed. ", error);
      });
    }
  }

  handleDeleteCourse = async (course) => {
    toast.success("Course Deleted");
    try {
      this.props.actions.deleteCourse(course);
    } catch (errs) {
      toast.error("Delete faild. " + errs.message, { autoClose: false });
    }
  };

  // state = {
  //   course: {
  //     title: "", // This will be a hook component
  //   },
  // };

  // handleChange = (event) => {
  //   // Arrow function inherit binding context of their enclosing scope
  //   const course = { ...this.state.course, title: event.target.value }; // Object spread, right values override left values
  //   this.setState({ course }); // Object shorthand, is the same as { course: course }
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   //We should dispatch an action. If we call the creator it will do nothing
  //   this.props.actions.createCourse(this.state.course);
  // };
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <CourseList
              onDeleteClick={this.handleDeleteCourse}
              courses={this.props.courses}
            />
          </>
        )}
      </>

      // <form onSubmit={this.handleSubmit}>
      //   <h2>Courses</h2>
      //   <h3>Add Course</h3>
      //   <input
      //     type="text"
      //     // onChange={this.handleChange.bind(this)} // Bound each render
      //     onChange={this.handleChange}
      //     value={this.state.course.title}
      //   ></input>
      //   <input type="submit" value="Save"></input>
      //   {this.props.courses.map((course) => (
      //     <div key={course.title}>{course.title}</div>
      //   ))}
      // </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            if (course) {
              return {
                ...course,
                authorName: state.authors.find((a) => a.id == course.authorId)
                  .name,
              };
            }
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //Accept a function or object
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}

// Connect function retun a fucntion an that function add Component as props.
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);
