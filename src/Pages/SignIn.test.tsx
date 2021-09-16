import SignIn from "./SignIn";
import { configure, shallow, mount} from 'enzyme'; 
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() }); //enzyme - react 17 hooks support

describe('Login Component', () => {
  it('Sign in form shoud be initialise correctly', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find('form').exists()).toBe(true);
  });
  it("Input components and submit button should be included", () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find('InputUsername').exists()).toBe(true);
    expect(wrapper.find('InputPassword').exists()).toBe(true);
    expect(wrapper.find('PageButton[buttonName="submit"]').exists()).toBe(true);
  });
  it("Default value for username and password should be empty", () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find('InputUsername').prop("usernameValue")).toBe("");
    expect(wrapper.find('InputPassword').prop("passwordValue")).toBe("");
  });
  it("Username and password will be updated when someome typing", ()=>{
    const wrapper = shallow(<SignIn/>);
    const Userinput = wrapper.find("InputUsername[name='username']");
    Userinput.simulate("change", {target:{usernameValue:"Vicky"}})
    expect(Userinput.prop("onchange")).toBeTruthy();
    const PasswordInput = wrapper.find("InputPassword[name='password']");
    PasswordInput.simulate("change", {target:{passwordValue:"vicky001"}})
    expect(PasswordInput.prop("onchange")).toBeTruthy();
  });
  it("Function exuceuted when Submit button is clicked", ()=>{
    const wrapper = shallow(<SignIn/>);
    const submitButton = wrapper.find("PageButton[buttonName='submit']");
    submitButton.simulate("click")
    expect(submitButton.prop("buttonFunction")).toBeTruthy();
  });
});