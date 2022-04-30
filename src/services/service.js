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
   return await axios.patch(`${loacalBaseUrl}/chaneStatusBanner`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}


//  =========================== CURD For Sub Categories ========================

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
   return await axios.patch(`${loacalBaseUrl}/changeSubStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  subcategories

export const editSubCatagories = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/editSubCatagories`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

//  =========================== CURD For  Primary Material ========================

export const addPrimaryMaterial = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addPrimaryMaterial`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// // list getPrimaryMaterial

export const getPrimaryMaterial = async ()=>{
   return await axios.get(`${loacalBaseUrl}/getPrimaryMaterial`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  changePrimaryMaterialStatus

export const changePrimaryMaterialStatus = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/changePrimaryMaterialStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// // change status  subcategories

export const editPrimaryMaterial = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/editPrimaryMaterial`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

//  =========================== CURD For  Secondary Material ========================

export const addSecondaryMaterial = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addSecondaryMaterial`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// // list getSecondaryMaterial

export const getSecondaryMaterial = async ()=>{
   return await axios.get(`${loacalBaseUrl}/getSecondaryMaterial`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  changePrimaryMaterialStatus

export const changeSecondaryMaterialStatus = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/changeSecondaryMaterialStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// // change editSecondaryMaterial

export const editSecondaryMaterial = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/editSecondaryMaterial`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

//  =========================== CURD For  Polish ========================

export const addPolish = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addPolish`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// list getSecondaryMaterial

export const getPolish = async ()=>{
   return await axios.get(`${loacalBaseUrl}/getPolish`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  changePrimaryMaterialStatus

export const changePolishStatus = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/changePolishStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// change editPolish

export const editPolish = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/editPolish`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

//  =========================== CURD For  Hinge ========================

export const addHinge = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addHinge`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// list getHinge

export const getHinge = async ()=>{
   return await axios.get(`${loacalBaseUrl}/getHinge`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  changeHingeStatus

export const changeHingeStatus = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/changeHingeStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// change editPolish

export const editHinge = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/editHinge`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
//  =========================== CURD For  Hinge ========================

export const addFitting = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addFitting`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// list getHinge

export const getFitting = async ()=>{
   return await axios.get(`${loacalBaseUrl}/getFitting`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  changeHingeStatus

export const changeFittingStatus = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/changeFittingStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// change editPolish

export const editFitting = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/editFitting`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
//  =========================== CURD For  Knob ========================

export const addKnob = async (data)=>{
   return await axios.post(`${loacalBaseUrl}/addKnob`,data,{headers: { 
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// list getHinge

export const getKnob = async ()=>{
   return await axios.get(`${loacalBaseUrl}/getKnob`,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}
// change status  changeHingeStatus

export const changeKnobStatus = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/changeKnobStatus`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}

// change editPolish

export const editKnob = async (data)=>{
   return await axios.patch(`${loacalBaseUrl}/editKnob`,data,{headers: { 
      'Authorization' : `Bearer ${process.env.REACT_APP_API_Token}`
   }})
}