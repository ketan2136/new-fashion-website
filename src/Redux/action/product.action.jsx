import { ID } from "appwrite";
import {
  COLLECTION_ID_MESSAGES,
  DATABASE_ID,
  IMAGES_ID,
  databases,
  storage,
} from "../../appwriteConfig";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
} from "../Actiontype";
import { type } from "@testing-library/user-event/dist/type";

export const getProduct = () => async (dispatch) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES
    );

    const messagesWithIds = await Promise.all(
      response.documents.map(async (doc, index) => {
        try {
          const filePreview = await storage.getFilePreview(
            IMAGES_ID,
            doc.image_id
          );
          return {
            ...doc,
            image_preview: filePreview,
            id: index + 1,
          };
        } catch (error) {
          console.error("Error fetching file preview:", error);
          // Return the document without the image preview
          return {
            ...doc,
            image_preview: null,
            id: index + 1,
          };
        }
      })
    );

    // console.log(messagesWithIds);
    // setMessage(messagesWithIds);
    dispatch({ type: GET_PRODUCT, payload: messagesWithIds });
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

// export const addProduct = (data) => async (dispatch) => {
//   console.log('actionData',data);

//   const rNo = Math.floor(Math.random() * 1000).toString();

//   const trueKeys = Object.keys(data).filter((key) => data[key] === true);
//   console.log("True Keys:", trueKeys);

//   const sizeString = trueKeys.join(",");

//   const filteredData = {};
//   for (const key in data) {
//     if (data[key] === true) {
//       filteredData[key] = data[key];
//     }
//   }

//   try {
//     const fileData = await storage.createFile(
//       IMAGES_ID,
//       ID.unique(),
//       data.image
//     );
//     const imageId = fileData.$id;

//     const priceAsString = String(data.price);

//     if (priceAsString.length > 1000) {
//       throw new Error("Price exceeds maximum length of 1000 characters");
//     }

//     const promise = await databases.createDocument(
//       DATABASE_ID,
//       COLLECTION_ID_MESSAGES,
//       ID.unique(),
//       {
//         // body: data.name,
//         user_id: rNo,
//         price: priceAsString,
//         brand: data.brand,
//         username: data.username,
//         description: data.description,
//         clotheSizes: data.sizes,
//         sale: data.sale,
//         categories: data.categories,
//         size: sizeString,
//         sku: data.sku,
//         image_id: imageId,
//       }
//     );

//     console.log(promise);

//     dispatch({ type: ADD_PRODUCT, payload: promise });
//   } catch (error) {
//     console.error("Error adding product:", error);
//   }

//   // dispatch({ type: ADD_PRODUCT, payload: data });
// };

export const addProduct = (data) => async (dispatch) => {
  console.log("actionData", data);

  const rNo = Math.floor(Math.random() * 1000).toString();

  const trueKeys = Object.keys(data).filter((key) => data[key] === true);
  console.log("True Keys:", trueKeys);

  const sizeString = trueKeys.join(",");

  const filteredData = {};
  for (const key in data) {
    if (data[key] === true) {
      filteredData[key] = data[key];
    }
  }

  try {
    const fileData = await storage.createFile(
      IMAGES_ID,
      ID.unique(),
      data.image
    );
    const imageId = fileData.$id;

    const priceAsString = String(data.price);

    if (priceAsString.length > 1000) {
      throw new Error("Price exceeds maximum length of 1000 characters");
    }

    const clotheSizesString = data.sizes.join(","); // Ensure clotheSizes is a string
    const categorie = data.categories.join(","); // Ensure clotheSizes is a string
    const sales = data.sale.join(","); // Ensure clotheSizes is a string

    if (clotheSizesString.length > 100) {
      throw new Error("clotheSizes exceeds maximum length of 100 characters");
    }

    const promise = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      ID.unique(),
      {
        // body: data.name,
        user_id: rNo,
        price: priceAsString,
        brand: data.brand,
        username: data.username,
        description: data.description,
        clotheSizes: clotheSizesString, // Ensure clotheSizes is a valid string
        sale: sales,
        color: data.color,
        categories: categorie,
        size: sizeString,
        sku: data.sku,
        image_id: imageId,
      }
    );

    console.log(promise);

    dispatch({ type: ADD_PRODUCT, payload: promise });
  } catch (error) {
    console.error("Error adding product:", error);
  }

  // dispatch({ type: ADD_PRODUCT, payload: data });
};

export const deleteProduct = (v) => async (dispatch) => {
  try {
    const userId = v.$id;
    console.log(userId);

    const resultStorage = await storage.deleteFile(
      IMAGES_ID, // bucketId
      v.image_id // fileId
    );

    console.log(resultStorage);

    const result = await databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      userId
    );
    console.log(result);
    dispatch({ type: DELETE_PRODUCT, payload: result });
  } catch (error) {
    console.log(error);
  }
};





// export const updateProduct = (data) => async (dispatch) => {
//   const categoriesFieldNames = [
//     "bags",
//     "shoes",
//     "kids",
//     "clothes",
//     "man",
//     "women",
//     "sizeS",
//     "sizeM",
//     "sizeL",
//     "sizeXL",
//     "sizeXXL",
//   ];

//   categoriesFieldNames.forEach((field) => {
//     const getcategories = data.size.split(",");

//     formik.setFieldValue(field, getcategories.includes(field)); // Convert truthy/falsy values to boolean
//   });
//     try {

//         const fileData = await storage.updateFile(
//     IMAGES_ID,
//       ID.unique(),// fileId
//     '<NAME>', // name (optional)
//     ["read("any")"] // permissions (optional)
// );

//     const imageId = fileData.$id;

//     const priceAsString = String(data.price);

//     if (priceAsString.length > 1000) {
//       throw new Error("Price exceeds maximum length of 1000 characters");
//     }

//     const result = await databases.updateDocument(
//       DATABASE_ID, // databaseId
//       COLLECTION_ID_MESSAGES, // collectionId
//       userId, // documentId
//       // {}, // data (optional)
//       // ["read("any")"] // permissions (optional)

//       ID.unique(),
//       {
//         // body: data.name,
//         user_id: rNo,
//         price: priceAsString,
//         brand: data.brand,
//         username: data.username,
//         description: data.description,
//         size: sizeString,
//         sku: data.sku,
//         image_id: imageId,
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }

//   //     const result = await databases.updateDocument(
//   //     DATABASE_ID, // databaseId
//   //     COLLECTION_ID_MESSAGES, // collectionId
//   //     userId, // documentId
//   //     {}, // data (optional)
//   //     ["read("any")"] // permissions (optional)
//   // );
// };

// export const updateProduct = (data) => async (dispatch) => {
//   try {

//     const fileData = await storage.updateFile(
//       IMAGES_ID,
//       data.image_id,
//       data.image.name,

//     );

//      const imageId = fileData.$id;

//      const priceAsString = String(data.price);

//      if (priceAsString.length > 1000) {
//        throw new Error("Price exceeds maximum length of 1000 characters");
//      }

//     const updatedData = {
//       user_id: data.user_id,
//     //   price: priceAsString,
//       brand: data.brand,
//       username: data.username,
//       description: data.description,
//       size: data.size,
//       sku: data.sku,
//       image_id: imageId,
//     };

//     const result = await databases.updateDocument(
//       DATABASE_ID,
//       COLLECTION_ID_MESSAGES,
//       data.id,
//       updatedData
//     );

//     dispatch({ type: UPDATE_PRODUCT, payload: result });
//   } catch (error) {
//     console.error("Error updating product:", error.message);
//   }
// };


// export const updateProduct = (data) => async (dispatch) => {
//   console.log("main Data", data);
//   try {
//     const fileData = await storage.updateFile(
//       IMAGES_ID,
//       data.image_id,
//       data.image_preview,
//       [`read(any)`]
//     );

//     const imageId = fileData.$id;

//     console.log("image", imageId);

//     const updatedData = {
//       user_id: data.user_id,
//       brand: data.brand,
//       pricel: data.price,
//       username: data.username,
//       description: data.description,
//       size: data.size,
//       sku: data.sku,
//       image_id: imageId,
//     };

//     //  const jsonUpdatedData = JSON.stringify(updatedData);

//     const result = await databases.updateDocument(
//       DATABASE_ID,
//       COLLECTION_ID_MESSAGES,
//       data.id,
//       updatedData,
//       ID.unique(),
//     );

//     console.log("fileData", result);

//     dispatch({ type: UPDATE_PRODUCT, payload: result });
//   } catch (error) {
//     console.error("Error updating product:", error.message);
//     // Additional error handling, e.g., check if document ID exists
//     if (error.code === "document-not-found") {
//       console.error("Document not found:", error.message);
//     }
//   }
// };


// export const updateProduct = (data) => async (dispatch) => {
//   console.log("main Data", data);
//   try {
//     const fileData = await storage.updateFile(
//       IMAGES_ID,
//       data.image_id,
//       data.image_preview,
//       ["read", "write"] // Assuming these are the required permissions
//     );

//     const imageId = fileData.$id;

//     console.log("image", imageId);

//     const updatedData = {
//       user_id: data.user_id,
//       brand: data.brand,
//       price: data.price, // Corrected pricel to price
//       username: data.username,
//       description: data.description,
//       size: data.size,
//       sku: data.sku,
//       image_id: imageId,
//     };

//     const result = await databases.updateDocument(
//       DATABASE_ID,
//       COLLECTION_ID_MESSAGES,
//       data.id,
//       updatedData,
//       ID.unique()
//     );

//     console.log("fileData", result);

//     dispatch({ type: UPDATE_PRODUCT, payload: result });
//   } catch (error) {
//     console.error("Error updating product:", error.message);
//     // Additional error handling, e.g., check if document ID exists
//     if (error.code === "document-not-found") {
//       console.error("Document not found:", error.message);
//     }
//   }
// };
//  const IMAGES_ID1 = "664dd65c003d4717ca1f";


export const updateProduct = (data) => async (dispatch) => {
  console.log("main Data>>>>>>>>>>>>>>>>>>>", data);
  try {
    // Ensure data.image_preview exists before calling updateFile
    if (!data.image_preview) {
      throw new Error("Image preview is required for updating the file.");
    }

    // Correct the permissions format to be a list of strings
    const permissions = ["any", `user:${data.user_id}`];

    // Uncomment and adjust this part if you need to update the file
    // const fileData = await storage.updateFile(
    //   IMAGES_ID1,
    //   data.image_id,
    //   data.image.name,
    //   permissions
    // );

    // const imageId = fileData.$id;
    // console.log("image", imageId);

    const updatedData = {
      user_id: data.user_id,
      brand: data.brand,
      price: data.price,
      username: data.username,
      description: data.description,
      size: data.size,
      sku: data.sku,
      // image_id: imageId, // Uncomment if image_id is updated
    };

    // Ensure data.id exists before calling updateDocument
    if (!data.id) {
      throw new Error("Document ID is required for updating the product.");
    }

    const result = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      data.id,
      updatedData,
      permissions
    );

    console.log("fileData", result);

    dispatch({ type: UPDATE_PRODUCT, payload: result });
  } catch (error) {
    console.error("Error updating product:", error.message);

    // Additional error details
    console.error("Error details:", error);

    // Specific error handling based on error code or message
    if (error.code === "document-not-found") {
      console.error("Document not found:", error.message);
    }
  }
};