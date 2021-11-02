import { configure } from "enzyme";
//Enzyme should change depeneds on react version
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
