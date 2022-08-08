import { UseTranslate } from "src/contexts/Translate";
import styles from "../../styles/table.module.scss";
import { success } from "src/constants/colors";
import Pagination from "src/components/pagination";
import UseExcell from "src/hooks/useExcell";
import SkButton from "src/components/button";
import moment from "moment";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineMoreHoriz } from "react-icons/md";
import { useAppContext } from "src/contexts/App";
import { appTypes } from "src/contexts/App/reducer";
import { FaSort } from "react-icons/fa";
import { BsCardImage } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ExportButtonContainer } from "../../styles";

const ListRoles = ({ data = [], count = 0, onChangePage }) => {
  const { sortList } = useAppContext();
  const { exportToCSV } = UseExcell();
  const [header, setHeader] = useState([]);
  const { translate } = UseTranslate();
  const [items, setItems] = useState([]);
  const [state, setState] = useState(Math.random());

  const initHeader = () => {
    const _headers = [
      { name: translate("name"), key: "name", sort: null },
      { name: translate("logo"), key: "logo", sort: null },
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
  const prepareDataToExport = () => {
    const _data = [];
    data.map((value, index) => {
      const _ = new Object();
      _[translate("id")] = value._id;
      _[translate("name")] = value.name;
      _[translate("date")] = moment(value.createdAt).format("DD-MM-YYYY");
      _data.push(_);
    });
    exportToCSV(_data, "Organizations - " + new Date().toISOString());
  };
  const sortByColumn = (value) => {
    let headers = header;
    let itemIndex = headers.findIndex((v) => v.key === value);
    let item = headers[itemIndex];
    item.sort = !!!item.sort;
    setHeader(headers);
    switch (value) {
      case "name":
        let _name = data.sort((a, b) => {
          return item.sort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });
        sortList(appTypes.roles, _name);
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
                    {value.name}
                  </td>
                  <td
                    onClick={() => {
                      if (value.logo && value.logo.length > 10) {
                        window.open(value.logo, "_blank");
                      }
                    }}
                  >
                    <BsCardImage />
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
export default ListRoles;
