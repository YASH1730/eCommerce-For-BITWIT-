import axios from 'axios';
// require('dotenv').config();


const loacalBaseUrl = 'http://localhost:8000'


// =========================== CURD FOR Cetagory ===========================

// for  adding category to the list 
export const addCategory = async(data)=>{
  return await axios.post(`${loacalBaseUrl}/addCategory`,data,{headers: { 
        'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
     }})

}

// for list of category
export const categoryList = async(data) =>{
   return await axios.get(`${loacalBaseUrl}/listCategory`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// for update the category
export const editCategory = async(data) =>{
   // console.log(data.ID)
   return await axios.patch(`${loacalBaseUrl}/editCategory/?ID=${data.ID}`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// for delete the category
export const deleteCategory = async(data) =>{
   console.log(data)
   return await axios.delete(`${loacalBaseUrl}/deleteCategory/?ID=${data}`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// for status the category
export const statusCategory = async(data) =>{
   
   return await axios.post(`${loacalBaseUrl}/changeStatusCategory`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// =========================== CURD FOR PRODUCTS  ===========================


// for  adding category to the list 

export const addProduct = async(data)=>{
   
   return await axios.post(`${loacalBaseUrl}/addProducts`,data,{headers: { 
         'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
      }})
 
 }

// for listing the products

export const getListProduct = async()=>{
   return await axios.get(`${loacalBaseUrl}/getListProduct`,{headers: { 
         'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
      }})
 
 }

// for deleting the product 

export const deleteProduct = async (ID) => {
   return await axios.delete(`${loacalBaseUrl}/deleteProduct/?ID=${ID}`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// for update the product 

export const updateProduct = async (data) => { 
   return await axios.patch(`${loacalBaseUrl}/updateProduct`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}


 // for getting the last product 

 export const getLastProduct = async()=>{
   return await axios.get(`${loacalBaseUrl}/getLastProduct`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
 }


//  =========================== CURD For Bannner ========================

// add banner

export const addBanner = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addBanner`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// list banner

export const listBanner = async ()=>{
   return await axios.get(`${loacalBaseUrl}/listBanner`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// change status banner

export const chaneStatus = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/chaneStatusBanner`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}


//  =========================== CURD For Bannner ========================

export const addSubCategories = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addSubCategories`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}



// list subcategories

export const getSubCatagories = async ()=>{
   return await axios.get(`${loacalBaseUrl}/getSubCatagories`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  subcategories

export const changeSubSatatus = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/changeSubStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  subcategories

export const editSubCatagories = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/editSubCatagories`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}