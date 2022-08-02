import React, { useEffect, useState } from "react";
import { UseTranslate } from "src/contexts/Translate";
import styles from "../styles/table.module.scss";
import { AiOutlineCloseCircle, AiOutlineCheckCircle, AiOutlineExpand } from "react-icons/ai";
import { danger, primary, success } from "src/constants/colors";
import Pagination from "src/components/pagination";
import { HiOutlineHome } from "react-icons/hi";
import { IoExpandOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import moment from "moment";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineMoreHoriz } from "react-icons/md";
import { ExportButtonContainer } from "../styles";
import SkButton from "src/components/button";
import UseExcell from "src/hooks/useExcell";
import { useAppContext } from "src/contexts/App";
import { appTypes } from "src/contexts/App/reducer";
const ListUsers = ({ data = [], count = 0, onChangePage }) => {
  const [header, setHeader] = useState([]);
  const { sortList } = useAppContext();
  const { translate } = UseTranslate();
  const [items, setItems] = useState([]);
  const [state, setState] = useState(Math.random());
  const { exportToCSV } = UseExcell();
  const initHeader = () => {
    const _headers = [
      { name: translate("fullname"), key: "firstname", sort: null },
      { name: translate("dni"), key: "dni", sort: null },
      { name: translate("role"), key: "role", sort: null },
      { name: translate("email"), key: "email", sort: null },
      { name: translate("phone"), key: "phone", sort: null },
      { name: translate("ubication"), key: "ubication", sort: null },
    ];
    setHeader(_headers);
  };
  const selectAll = () => {
    if (items.length === data.length) {
      setItems([]);
      setState(Math.random());
      return;
    }
    let list = items;
    data.map((v, i) => {
      let exist = items.find((vi) => vi == i);
      if (exist == 0) return;
      if (!exist) {
        list.push(i);
      }
    });
    setItems(list);
    setState(Math.random());
  };
  const selectItem = (value) => {
    let list = items;
    let exist = items.find((v) => v == value);
    let index = items.findIndex((v) => v === value);
    if (exist === 0) {
      list.splice(index, 1);
      setItems(list);
      setState(Math.random());
      return;
    }
    if (!exist) {
      list.push(value);
      setItems(list);
    } else {
      list.splice(index, 1);
      setItems(list);
    }
    setState(Math.random());
  };
  const showOrganizationInfo = (value) => {
    console.log(value);
  };

  const prepareDataToExport = () => {
    const _data = [];
    data.map((value, index) => {
      const _ = new Object();
      _[translate("id")] = value._id;
      _[translate("fullname")] = `${value.personId.firstname} ${value.personId.lastname}`;
      _[translate("dni")] = value.personId.dni;
      _[translate("role")] = value.roleId.name;
      _[translate("email")] = value.personId.email;
      _[translate("phone")] = value.personId.phone;
      _[translate("ubication")] = `${value.personId.address} ${value.areasId.name}`;
      _[translate("status")] = value.personId.enabled;
      _[translate("date")] = moment(value.createdAt).format("DD-MM-YYYY");
      _data.push(_);
    });
    exportToCSV(_data, "Users - " + new Date().toISOString());
  };
  const sortByColumn = (value) => {
    let headers = header;
    let itemIndex = headers.findIndex((v) => v.key === value);
    let item = headers[itemIndex];
    item.sort = !!!item.sort;
    setHeader(headers);
    switch (value) {
      case "firstname":
        let _firtname = data.sort((a, b) => {
          return item.sort ? a.personId.firstname.localeCompare(b.personId.firstname) : b.personId.firstname.localeCompare(a.personId.firstname);
        });
        sortList(appTypes.users, _firtname);
        break;
      case "role":
        let _role = data.sort((a, b) => {
          return item.sort ? a.roleId.name.localeCompare(b.roleId.name) : b.roleId.name.localeCompare(a.roleId.name);
        });
        sortList(appTypes.users, _role);
        break;
      case "ubication":
        let _ubication = data.sort((a, b) => {
          return item.sort ? a.areasId.name.localeCompare(b.areasId.name) : b.areasId.name.localeCompare(a.areasId.name);
        });
        sortList(appTypes.users, _ubication);
        break;
      case "dni":
        let _dni = data.sort((a, b) => {
          return item.sort ? a.personId.dni.localeCompare(b.personId.dni) : b.personId.dni.localeCompare(a.personId.dni);
        });
        sortList(appTypes.users, _dni);
        break;
      case "email":
        let _email = data.sort((a, b) => {
          return item.sort ? a.personId.email.localeCompare(b.personId.email) : b.personId.email.localeCompare(a.personId.email);
        });
        sortList(appTypes.users, _email);
        break;
      case "phone":
        let _phone = data.sort((a, b) => {
          return item.sort ? a.personId.phone.localeCompare(b.personId.phone) : b.personId.phone.localeCompare(a.personId.phone);
        });
        sortList(appTypes.users, _phone);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    initHeader();
  }, []);
  return (
    <>
      <div className={styles.table}>
        <table>
          <thead className={styles.tableHead}>
            <tr>
              <th style={{ maxWidth: 35 }}>
                <div onClick={selectAll} style={{ alignItems: "center", justifyContent: "flex-start", display: "flex" }}>
                  {items.length === data.length ? (
                    <MdOutlineCheckBox color={"#2563eb"} style={{ margin: "0px 2px" }} size={20} />
                  ) : (
                    <MdCheckBoxOutlineBlank style={{ margin: "0px 2px" }} size={20} />
                  )}
                </div>
              </th>
              {header.map((value, index) => {
                return (
                  <th
                    key={index}
                    className={styles.tableHeadItem}
                    onClick={() => {
                      sortByColumn(value.key);
                    }}
                  >
                    <div style={{ alignItems: "center", justifyContent: "flex-start", display: "flex", color: "#5e6e82" }}>
                      {value.name}
                      <FaSort size={14} color={"#5e6e82"} />
                    </div>
                  </th>
                );
              })}
              <th>
                <div style={{ alignItems: "center", justifyContent: "flex-start", display: "flex" }}>
                  <MdOutlineMoreHoriz size={24} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {data.map((value, index) => {
              return (
                <tr className={styles.tableBodyItem} style={{ color: items.find((v) => v == index) != undefined ? "#2563eb" : "#525f7f" }} key={index}>
                  <td style={{ maxWidth: 35 }}>
                    <div
                      onClick={() => {
                        selectItem(index);
                      }}
                    >
                      {items.find((v) => v == index) != undefined ? (
                        <MdOutlineCheckBox style={{ margin: "0px 2px" }} size={20} />
                      ) : (
                        <MdCheckBoxOutlineBlank style={{ margin: "0px 2px" }} size={20} />
                      )}
                    </div>
                  </td>
                  <td
                    onClick={() => {
                      selectItem(index);
                    }}
                  >
                    {value.personId.firstname} {value.personId.lastname}
                  </td>
                  <td
                    onClick={() => {
                      selectItem(index);
                    }}
                  >
                    {value.personId.dni}
                  </td>
                  <td
                    onClick={() => {
                      selectItem(index);
                    }}
                  >
                    {value.roleId.name}
                  </td>
                  <td
                    onClick={() => {
                      selectItem(index);
                    }}
                  >
                    {value.personId.email}
                  </td>
                  <td
                    onClick={() => {
                      selectItem(index);
                    }}
                  >
                    {value.personId.phone}
                  </td>
                  <td style={{ flex: 1 }}>
                    {value.personId.address} {value.areasId.name}
                  </td>
                  <td style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    {value.enabled ? (
                      <AiOutlineCheckCircle style={{ margin: "0px 2px" }} size={25} />
                    ) : (
                      <AiOutlineCloseCircle style={{ margin: "0px 2px" }} color={danger} size={25} />
                    )}
                    <IoExpandOutline
                      style={{ margin: "0px 2px" }}
                      size={25}
                      onClick={() => {
                        selectItem(index);
                      }}
                    />
                    {value.organizationId ? (
                      <HiOutlineHome
                        onClick={() => {
                          showOrganizationInfo(value);
                        }}
                        style={{ margin: "0px 2px" }}
                        size={25}
                      />
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        count={count}
        onChangePage={(value) => {
          onChangePage(value);
        }}
      />

      <ExportButtonContainer style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
        <SkButton styles={{ fontWeight: "400" }} background={"#fff"} textColor={success} onClick={prepareDataToExport} text={translate("export-data")} />
      </ExportButtonContainer>
    </>
  );
};
export default ListUsers;
