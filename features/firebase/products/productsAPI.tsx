import { db } from "@/config/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";

export type ProductCategory = "nursery" | "primary" | "secondary" | "tertiary";

export interface Product {
  title: string;
  description: string;
  image?: string;
  classes: string;
  category: ProductCategory;
  features: string;
  ISBN: string;
  createdAt: string;
}

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));

  const productsArray = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productsArray;
};

export const getProductById = async (id: string) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Product, "id">),
    };
  } else {
    throw new Error("Product not found");
  }
};
export const updateProduct = async (id: string, data: any) => {
  const ref = doc(db, "products", id);
  await updateDoc(ref, data);
};
export const createProduct = async (product: Product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      ...product,
    });
    toast.success("Product created successfully");
    return { id: docRef.id, ...product };
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
export const deleteProduct = async (id: string) => {
  try {
    await deleteDoc(doc(db, "products", id));
    toast.success("Product deleted successfully");
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    toast.error("Error deleting product");
    throw error;
  }
};
