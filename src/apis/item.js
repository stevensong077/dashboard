import fbs from "../utils/firebase";
const {firestore} = fbs

const itemApi = {
  getItem: async () => {
    try {
      const itemList = await firestore.collection(`products`).get();
      return { sucess: true, data: itemList };
    } catch (err) {
      console.log(err);
      return { success: false, err };
    }
  },
};

export default itemApi;
