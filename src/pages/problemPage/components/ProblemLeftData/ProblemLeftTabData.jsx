/* eslint-disable react/prop-types */
import { Select } from "antd";
import { useState, useEffect, memo } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link as RouterLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Tab3 = () => {
  const [data, setData] = useState([]);

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
        console.log(dataWithIds);
        setData(dataWithIds);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
      {/* <div className="">
        <ul className="flex justify-between items-center">
          <li>
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
          </li>
          <li>
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
          </li>
          <li className="w-[90px]">
            <button>Runtime</button>
          </li>
          <li className="w-[90px]">
            <button>Time</button>
          </li>
        </ul>
        <ul className="flex justify-between items-center">
          <Link>
            <div className="flex flex-col py-[9px]">
              {data.map((el) => (
                <div
                  key={el.id}
                  className={
                    el.status === "ERROR"
                      ? `text-sm font-medium px-2 text-red-600 py-[9px]`
                      : `text-sm font-medium px-2 text-green-600 py-[9px]`
                  }
                >
                  {el.status}
                </div>
              ))}
            </div>
          </Link>
          <Link>
            <div className="lang flex flex-col py-[9px]">
              {data.map((el) => (
                <div key={el.id} className="px-2 py-[9px]">
                  {el.language}
                </div>
              ))}
            </div>
          </Link>
          <Link className="pt-2 hover:bg-[#ffffff12]">
            <div className="runtime py-[9px]">
              {data.map((el) => (
                <div key={el.id} className="px-2 py-[9px]">
                  {`${el.runtime} ms`}
                </div>
              ))}
            </div>
          </Link>
          <Link className="pt-2 hover:bg-[#ffffff12]">
            <div className="time py-[9px]">
              {data.map((el) => (
                <div key={el.id} className="px-2 py-[9px]">
                  {`${new Date(el.time)
                    .toLocaleString("en-US", { month: "short" })
                    .toLowerCase()} ${new Date(el.time).getDate()}, 
                  ${new Date(el.time).getFullYear()}`}
                </div>
              ))}
            </div>
          </Link>
        </ul>
      </div> */}
      {/* <CustomTable /> */}
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
                   color: '#eff1f6bf'
                }}
              >
                <button>Runtime</button>
              </TableCell>
              <TableCell
                sx={{
                  borderBottomColor: "#f7faff2e",
                   color: '#eff1f6bf'
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
                component={RouterLink}
                to={`/problem/2/${el.id}`} // Replace with your route structure
                sx={{
                  textDecoration: "none",
                  "&:hover": { backgroundColor: "#ffffff12" },
                }}
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
                    color: '#eff1f6bf'
                  }}
                >
                  {el.language}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                     color: '#eff1f6bf'
                  }}
                >
                  {" "}
                  {`${el.runtime} ms`}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                     color: '#eff1f6bf'
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

export default memo(Tab3);
