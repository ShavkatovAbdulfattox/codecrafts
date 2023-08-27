import React from "react";
import { Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedId } from "../../../../app/features/rightSide/leftSideSlice";

const Tab3 = () => {
  const { id, selectedTabLabel } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  const selectedId = useSelector((state) => state.leftSide.selectedId);

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
        // const dataWithIds = apiData.map((item) => ({
        //   ...item,
        //   id: uuidv4(),
        // }));
        // console.log(dataWithIds);
        console.log(apiData);
        setData(apiData);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleRowClick = (subId) => {
    if (subId) {
      navigate(`/problem/${id}/${selectedTabLabel}/${subId}`);
      dispatch(setSelectedId(subId));
    }
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </>
  );
};

export default Tab3;
