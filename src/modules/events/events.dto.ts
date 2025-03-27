import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { EventEntity } from "@/database/entities";
import { type OmitDbFields } from "@/types";

export type Event = OmitDbFields<EventEntity>;

export class EventDTO implements Event {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

<<<<<<< Updated upstream
  @IsOptional()
  image: any;
=======
  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  eventAt: string;
>>>>>>> Stashed changes
}
