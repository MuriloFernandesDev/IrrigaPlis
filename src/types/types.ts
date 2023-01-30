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

export interface IProducts {
   current_page: number
   data: [
      {
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
      },
      {
         id: number
         name: string
         description: string
         image_url: string
         media: []
      }
   ]
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
