import React, { useState } from "react";
import "./login.css";
import First from "./first";
import TeacherLogin from "./TeacherLogin";
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
import GuestLogin from "./GuestLogin";

export default function Login() {
  const [page, setPage] = useState(null);

  return (
  <div>
    {!page && <First sp={setPage} />}
    {page === "0" && <AdminLogin/>}
    {page === "1" && <TeacherLogin/>}
    {page === "2" && <StudentLogin/>}
    {page === "3" && <GuestLogin/>}
    
  </div>
  );
}
