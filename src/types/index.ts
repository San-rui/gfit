export type User ={
        id:string,
        name: string,
        email: string,
        password:string,
        gender:string,
        age:number,
        weight:string,
        height:string,
        image: FileList | null,
        sessionToken?: string,
}

export type DataUser={
        id: string,
        wod?: string[],
        meal?: string[],
}

export type Results = {
        category: number,
        creation_date: string,
        description: string,
        equipment: number[],
        exercise_base: number,
        id: number,
        language: number,
        license: number,
        license_author: string,
        muscles: [],
        muscles_secondary: [],
        name: string,
        status: number,
        uuid: string,
        variations: [],
}

export type Training = {
        category: number,
        creation_date: string,
        description: string,
        equipment: number[],
        exercise_base: number,
        id: number,
        language: number,
        license: number,
        license_author: string,
        muscles: [],
        muscles_secondary: [],
        name: string,
        status: number,
        uuid: string,
        variations: [],
}

export type SportInfo = {
        config: object,
        data: Training,
        headers: object,
        request: object,
        status: number,
        statusText: string,
}

type Photo={
        thumb:string,
}

export type Branded={
        brand_name: string,
        brand_name_item_name: string,
        brand_type: number,
        food_name: string,
        locale: string,
        nf_calories: number,
        nix_brand_id: string,
        nix_item_id: string,
        photo: Photo,
        region: number,
        serving_qty: number,
        serving_unit: string,
}

export type Common ={
        common_type: void,
        food_name: string,
        locale: string,
        photo: Photo,
        serving_qty: number,
        serving_unit: string,
        tag_id: string,
        tag_name: string,
}

export type Activity={
        activity: string,
        description:string,
        id:string,
        intensityLevel: number,
        metValue: string,
        _id: string,
}

export type Meal={
        breakfast?:string,
        lunch?:string,
        afternoonSnack?:string,
        dinner?: string,
}

export type UserWodMeal= {
        wod?:{
                description?: string,
                calories?: number,
        }
        meal?:{
                [name: string]:string
        },
        day?:string,
        idUser?: string | undefined,
        id?: string,
}

export type CheckedMeal={
        type?: string,
        meal?: string
}

export type FinishedMeal = {
        day?: string,
        type?: string,
        mealOrwod?: string,
        userId?: string
}


