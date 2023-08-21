import React from "react";
import { Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedId } from "../../../../app/features/rightSide/leftSideSlice";
const Tab3 = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "post",
      url: "https://edubinplatform-a01d5146e549.herokuapp.com/submissions/get",
      data: {
        questionId: 2,
        queryId: 0,
        userId: 8,
      },
    })
      .then((response) => {
        const apiData = response.data.data;
        const dataWithIds = apiData.map((item) => ({
          ...item,
          id: uuidv4(),
        }));
        // console.log(dataWithIds);
        setData(dataWithIds);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleRowClick = (id) => {
    dispatch(setSelectedId(id))
    navigate(`/problem/2/${id}`);
  };

  const [status, setStatus] = useState("");

  const handleChange = (value) => {
    setStatus(value);
  };
  const [language, setLanguage] = useState("");

  const handleChangeLang = (lang) => {
    setLanguage(lang);
  };

  const uniqueStatusValues = Array.from(new Set(data.map((el) => el.status)));

  const uniqueStatusValuesLang = Array.from(
    new Set(data.map((el) => el.language))
  );

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Table aria-label="custom table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottomColor: "#f7faff2e",
                }}
              >
                <Select
                  defaultValue={{
                    value: "status",
                    label: "Status",
                  }}
                  onChange={handleChange}
                  options={uniqueStatusValues.map((status) => ({
                    value: status,
                    label: status,
                  }))}
                  style={{
                    width: 90,
                  }}
                />
              </TableCell>
              <TableCell sx={{ borderBottomColor: "#f7faff2e" }}>
                <Select
                  defaultValue={{
                    value: "langauge",
                    label: "Language",
                  }}
                  onChange={handleChangeLang}
                  options={uniqueStatusValuesLang.map((lang) => ({
                    value: lang,
                    label: lang,
                  }))}
                  style={{
                    width: 90,
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  borderBottomColor: "#f7faff2e",
                  color: "#eff1f6bf",
                }}
              >
                <button>Runtime</button>
              </TableCell>
              <TableCell
                sx={{
                  borderBottomColor: "#f7faff2e",
                  color: "#eff1f6bf",
                }}
              >
                <button>Time</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow
                key={el.id}
                onClick={() => handleRowClick(el.id)}
                to={`/problem/2/${el.id}`} // Replace with your route structure
                sx={{
                  textDecoration: "none",
                  "&:hover": { backgroundColor: "#ffffff12" },
                }}
                style={{ cursor: "pointer" }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    borderBottom: "none",
                    color: (theme) =>
                      el.status === "ERROR"
                        ? theme.palette.error.main
                        : theme.palette.success.main,
                  }}
                >
                  {el.status}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#eff1f6bf",
                  }}
                >
                  {el.language}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#eff1f6bf",
                  }}
                >
                  {" "}
                  {`${el.runtime} ms`}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#eff1f6bf",
                  }}
                >
                  {`${new Date(el.time)
                    .toLocaleString("en-US", { month: "short" })
                    .toLowerCase()} ${new Date(el.time).getDate()}, 
                  ${new Date(el.time).getFullYear()}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tab3;
