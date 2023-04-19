/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Projects(props) {
  const { notiData } = props;
  const notiItem = notiData.noti_item;

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pl={3} mt={4}>
        <MDBox>
          <MDTypography variant="h4" gutterBottom>
            {notiData.title}
          </MDTypography>
        </MDBox>
      </MDBox>
      {notiItem.map((item) => (
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pl={3}
          component={Link}
          to="/"
          lineHeight={1}
        >
          <MDTypography variant="p" gutterBottom mt={2} color="info">
            {item}
          </MDTypography>
        </MDBox>
      ))}
    </Card>
  );
}

export default Projects;
