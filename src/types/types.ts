export interface Product {
   amount: number
   image: string
   price: number
   id: number
   title: string
}

export interface Stock {
   id: number
   amount: number
}

export interface ProductCartProps {
   image: string
   price: number
   id: number
   title: string
}

export interface IUser {
   birthday: string
   block_matches_until: string
   created_at: string
   current_team_id: null | string
   deleted_at: null | string
   document: string
   email: string
   email_verified_at: string
   expires_at: null | string
   id: number
   is_admin: boolean
   is_blocked: boolean
   is_recipient: number
   is_subscriber: boolean
   is_validated: boolean
   name: string
   note: null | string
   profile_photo_path: string
   promotion: boolean
   updated_at: string
}

export interface ICategories {
   slug: string
   name: string
   id: number
   products: [
      {
         id: number
         name: string
         description: string
         image_url: string
         media: []
      }
   ]
}

export interface IProduct {
   id: number
   name: string
   description: string
   image_url: string
   media: [
      {
         id: number
         model_type: string
         model_id: number
         uuid: string
         collection_name: string
         name: string
         file_name: string
         mime_type: string
         disk: string
         conversions_disk: string
         size: number
         manipulations: []
         custom_properties: []
         generated_conversions: {
            preview: boolean
         }
         responsive_images: []
         order_column: number
         created_at: string
         updated_at: string
         original_url: string
         preview_url: string
      }
   ]

   select: {
      options: string[]
      title: string
   }[]

   variations: Array<{
      attributes: {
         ["'medidas'"]: string
      }
      price: number
   }>
}

export interface IProducts {
   current_page: number
   data: Array<IProduct>
   first_page_url: string
   from: number
   last_page: number
   last_page_url: string
   links: [
      {
         url: null
         label: string
         active: boolean
      }
   ]
   next_page_url: boolean | string
   path: string
   per_page: number
   prev_page_url: null
   to: number
   total: number
}

export interface IProduct2 {
   description: string
   id: number
   image_url: string
   media: Array<{
      collection_name: string
      conversions_disk: string
      created_at: string
      custom_properties: Array<unknown>
      disk: string
      file_name: string
      generated_conversions: {
         preview: boolean
      }
      id: number
      manipulations: Array<unknown>
      mime_type: string
      model_id: number
      model_type: string
      name: string
      order_column: number
      original_url: string
      preview_url: string
      responsive_images: Array<unknown>
      size: number
      updated_at: string
      uuid: string
   }>
   name: string
}

export interface ICategories2 {
   current_page: number
   data: Array<IProduct2>
   first_page_url: string
   from: number
   last_page: number
   last_page_url: string
   links: Array<{
      active: boolean
      label: string
      url: string | null
   }>
   next_page_url: string | null
   path: string
   per_page: number
   prev_page_url: string | null
   to: number
   total: number
}
