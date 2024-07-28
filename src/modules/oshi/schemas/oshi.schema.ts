import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Oshi {
  @Prop({ required: true })
  name: string;

  @Prop()
  nickname: string;

  @Prop()
  image: string;

  @Prop()
  group: string;

  @Prop({ type: [String] })
  twitter: string[];

  @Prop({ type: [String] })
  instagram: string[];

  @Prop({ type: [String] })
  tiktok: string[];
}

export const OshiSchema = SchemaFactory.createForClass(Oshi);
export type OshiDocument = HydratedDocument<Oshi>;
