import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { deleteFavorite } from "../../Redux/action/favorite.action";
import { json } from "react-router-dom";

function Sidebar({ navRight, open1, close }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const [cartVal, setVartVal] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const favoriteValue = localStorage.getItem("cartItem");
    // const datats = favoriteValue || [];
    // setVartVal(JSON.parse(datats));
     const data = favoriteValue ? JSON.parse(favoriteValue) : [];
     setVartVal(data);
  }, []);

  const productVal = useSelector((state) => state.product);
  console.log(productVal);

  const cartValue = cartVal.map((v) => {
    const productData = productVal.product.filter((data) => data.id === v.pid);
    console.log(productData);

    const fData = { ...productData, ...v };

    return fData;
  });

  console.log("dddddddddddddddddd", cartValue);

  const handleRemove = (id) => {
    console.log("oooooooooo", id);
    const deleteData = cartValue.filter((v, k) => v.pid !== id);
    console.log("JKKKKKKKKKKKKKKKKKKKK", deleteData);
    const simplifiedCartItems = deleteData?.map((item) => ({
      pid: item.pid,
      qty: item.qty,
    }));
    dispatch(deleteFavorite(deleteData));

    // if (Array.isArray(deleteData) && deleteData) {
    localStorage.setItem("cartItem", JSON.stringify(simplifiedCartItems));
    // }
  };

  const toggleDrawer = (navRight, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    close();
    setState({ ...state, [navRight]: open });
  };

  const renderFavoriteVal = (favoriteVal) => {
    return (
      <div>
        {/* {cartValue.map((item, key) => (
          // console.log("kkkkkkkkkkk", item[0])
          <div key={key}>
            <div className="cartimage">
              <img src={item[0]?.image_preview} alt="" />
            </div>
            <p>Name :{item[0]?.username}</p>
            <p>Price :{item[0]?.price}</p>
            <p>Brand :{item[0]?.brand}</p>
            <p>Categories :{item[0]?.categories}</p>
          </div>
        ))} */}
        {cartValue.length === 0 ? (
          <p>cart not found</p>
        ) : (
          cartValue.map((item, key) => (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
                padding: "10px",
                borderBottom: "1px solid #ccc",
              }}
            >
              <img
                src={item[0]?.image_preview}
                alt={item[0]?.username}
                style={{
                  width: "100px",
                  // height: "100px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  marginRight: "16px",
                }}
              />
              <div>
                <span style={{ marginRight: "8px" }}>
                  <strong>Name:</strong> {item[0]?.username}
                </span>
                <span style={{ marginRight: "8px" }}>
                  <strong>Price:</strong> {item[0]?.price}
                </span>
                <span style={{ marginRight: "8px" }}>
                  <strong>Brand:</strong> {item[0]?.brand}
                </span>
                <span>
                  <strong>Categories:</strong> {item[0]?.categories}
                </span>
              </div>
              <div style={{ border: "2px solid black", borderRadius: "50%" }}>
                <CloseIcon
                  style={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleRemove(item[0]?.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    );
  
    
  };

  const list = (navRight) => (
    <Box
      sx={{ width: navRight === "top" || navRight === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(navRight, false)}
      onKeyDown={toggleDrawer(navRight, false)}
    >
      <List>
        <h3 style={{ paddingLeft: "10px" }}> Favorite</h3>
      </List>
      <Divider />

      <div style={{ padding: "16px" }}>{renderFavoriteVal(cartValue)}</div>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={navRight}
          open={open1}
          onClose={toggleDrawer(navRight, false)}
          onOpen={toggleDrawer(navRight, true)}
          PaperProps={{
            sx: {
              width: 550,
            },
          }}
        >
          {list(navRight)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
