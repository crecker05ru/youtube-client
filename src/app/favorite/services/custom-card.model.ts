export interface CustomCard {
  id: string;
  title : string;
  description: string;
  imageLink: string;
  videoLink: string;
  creationDate: string | Date;
  tags?: string[];
}
