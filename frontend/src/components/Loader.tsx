import axios from 'axios'
import React, { useEffect, useState, createContext, useContext } from 'react'

type PropsType = {
    id: number
    children: React.ReactNode
}
type RestroInfoPayloadType = {
    payload: {
        address: string
        id: number
        name: string
    }
}
type CategoryType ={
    category:string
    id: number
}
type ProductCategoriesPayloadType ={
    payload:CategoryType[]
}

type ErrorType = {
    message: string
}
interface Product {
    description: string;
    id: number;
    image: string | null;
    name: string;
    price: number;
    product_id: number;
    product_type: number;
    protein_choice: string | null;
    size: number;
    spice_level: string | null;
}

interface Category {
    [key: string]: Product[];
}

interface Payload {
    [key: string]: Product[];
}

interface Data {
    payload: Payload;
}
interface LoaderContextType{
    restroInfoData: RestroInfoPayloadType| null |ErrorType
    productCategories: ProductCategoriesPayloadType| null| ErrorType
    productInfo: Data | null | ErrorType
}
const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoaderContext = (): LoaderContextType =>{
    const context = useContext(LoaderContext)
    if (context === undefined){
        throw new Error('useLoaderContext must be used within a LoaderProvider')
    }
    return context
}
export const LoaderProvider: React.FC<PropsType> = ({id, children}: PropsType) => {
    const [restroInfoData, setRestroInfoData] = useState<null|RestroInfoPayloadType|ErrorType>(null)
    const [productCategories, setProductCategories] = useState<null|ProductCategoriesPayloadType|ErrorType>(null)
    const [productChange, setProductChange] = useState(false)
    const [productInfo, setProductInfo] = useState<null|ErrorType|Data>(null)
    useEffect(() =>{
        axios.get('/getRestaurantInfo', {
            params:{
                id: id
            }
        }).then(response => {
            setRestroInfoData(response.data)
            console.log(response.data)

        })

        axios.get('/getProductCategories').then(response => {
            setProductCategories(response.data)
            setProductChange(true)
            console.log(response.data)
        })


    }, [])

    useEffect(() =>{
        let paramString: string = ""
        if (productCategories && 'payload' in productCategories){
            productCategories.payload.forEach((item: CategoryType) =>{
                paramString += item.category + '@:-:@'
            })
            console.log(paramString)
        }
        axios.get('/getProductInfo', {
            params:{
                categories: paramString
            }
        }).then(response =>{
            setProductInfo(response.data)
            console.log(response.data)
        })
    }, [productChange])

  return (
    <LoaderContext.Provider value={{restroInfoData, productCategories, productInfo}}>
        {children}
    </LoaderContext.Provider>
  )
}
