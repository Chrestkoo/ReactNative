/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import AuthLoadingScreen from "./scr/AuthLoadingScreen";
import WelcomeScreen from "./scr/WelcomeScreen";
import SignInScreen from "./scr/SignInScreen";
import SignUpScreen from "./scr/SignUpScreen";

const AuthStackNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
});

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator
});
