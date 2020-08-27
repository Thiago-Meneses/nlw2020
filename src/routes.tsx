import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./paginas/Landing";
import TeacherList from "./paginas/TeacherList";
import TeacherForm from "./paginas/TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;