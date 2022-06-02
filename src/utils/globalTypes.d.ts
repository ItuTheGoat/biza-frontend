export interface IBusiness {
  _id: string;
  businessName: string;
  category: ICategory[];
  location?: string;
  dateAdded: Date;
  datemodified?: Date;
  description?: string;
  email: string;
  ownerName: string;
  phoneNum: string;
  slogan: string;
  userID: string;
  verified: boolean;
  imageField: Image[];
  averageRating?: number;
}

export interface ICategory {
  _id: string;
  name: string;
}

export interface IImage {
  _id: string;
  imageName: string;
  imageUrl: string;
}

export interface IBusinessCard {
  _id: string;
  businessName: string;
  verified: boolean;
  description: string;
}
