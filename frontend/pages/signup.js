import Layout from "../components/Layout";
import Link from "next/link";
import SignupComponent from "../components/auth/SignupComponent";
const Signup = () => {
  return (
    <Layout>
      <h2>Signup page</h2>
      <SignupComponent></SignupComponent>
    </Layout>
  );
};

export default Signup;
