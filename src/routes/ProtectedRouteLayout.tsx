import { useUserStore } from "@/stores/auth";
import Layout from "@/layouts/Layout";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouteLayout() {
  const { user } = useUserStore();

  //const {isError, isFetched} = useGetMe()

  useEffect(() => {
    console.log(user);
  }, []);

  if (user.username) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRouteLayout;
