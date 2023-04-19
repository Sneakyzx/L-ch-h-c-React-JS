/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";


export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Lớp học đang có", accessor: "project", width: "30%", align: "left" },
      { Header: "Học phí", accessor: "budget", align: "left" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Số người đăng ký", accessor: "completion", align: "center" },
      { Header: "Đăng ký", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: <Project image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} name="React JS" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2.990.000Đ
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Đang hoạt động
          </MDTypography>
        ),
        completion: <Progress color="info" value={100} />,
        action: (
          <MDButton variant="gradient" color="info" size="small">Đăng ký</MDButton>
        ),
      },
      {
        project: <Project image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'} name="Node JS" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2.500.000Đ
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Đang hoạt động
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDButton variant="gradient" color="info" size="small">Đăng ký</MDButton>
        ),
      },
      {
        project: <Project image={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'} name="Vue" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2.500.000Đ
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Đang hoạt động
          </MDTypography>
        ),
        completion: <Progress color="error" value={60} />,
        action: (
          <MDButton variant="gradient" color="info" size="small">Đăng ký</MDButton>
        ),
      },
      {
        project: <Project image={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'} name="HTML/CSS" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            1.500.000Đ
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Đang hoạt động
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDButton variant="gradient" color="info" size="small">Đăng ký</MDButton>
        ),
      },
      {
        project: <Project image={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apache_kafka_wordtype.svg/2560px-Apache_kafka_wordtype.svg.png'}  name="Kafka" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2.800.000Đ
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Đang hoạt động
          </MDTypography>
        ),
        completion: <Progress color="error" value={75} />,
        action: (
          <MDButton variant="gradient" color="info" size="small">Đăng ký</MDButton>
        ),
      },
      {
        project: <Project image={'https://www.ux-ui.net/ux/uploads/2017/03/ux-ui-logo.svg'} name="UX/UI Design" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            3.000.000Đ
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Đang hoạt động
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDButton variant="gradient" color="info" size="small">Đăng ký</MDButton>
        ),
      },
    ],
  };
}
