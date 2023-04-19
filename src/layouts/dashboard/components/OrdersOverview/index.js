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

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
// import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview(props) {
  const { newsData } = props;
  const newsItem = newsData.news_item;

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium">
          {newsData.title}
        </MDTypography>
      </MDBox>
      {newsItem.map((item) => (
        <MDBox
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-start"
          pl={3}
          component={Link}
          to="/"
          lineHeight={1}
        >
          <MDTypography variant="p" gutterBottom mt={3} color="info">
            {item}
          </MDTypography>
        </MDBox>
      ))}

    </Card>
  );
}

export default OrdersOverview;
