// components/withAuth.js
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        router.push("/login"); // Redirect to login if no token
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
