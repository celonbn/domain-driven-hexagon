import { CreateUser } from '@src/interface-adapters/interfaces/user/create.user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

@ArgsType() // <- only if you are using GraphQL
@InputType() // <- only if you are using GraphQL
export class CreateUserRequest implements CreateUser {
  @ApiProperty({
    example: 'john@gmail.com',
    description: 'User email address',
  })
  @MaxLength(320)
  @IsEmail()
  @Field() // <- only if you are using graphql
  readonly email: string;

  @ApiProperty({ example: 'France', description: 'Country of residence' })
  @MaxLength(50)
  @IsString()
  @Matches(/^[a-zA-Z ]*$/)
  @Field() // <- only if you are using graphql
  readonly country: string;

  @ApiProperty({ example: '28566', description: 'Postal code' })
  @MaxLength(10)
  @IsAlphanumeric()
  @Field() // <- only if you are using graphql
  readonly postalCode: string;

  @ApiProperty({ example: 'Grande Rue', description: 'Street' })
  @MaxLength(50)
  @Matches(/^[a-zA-Z ]*$/)
  @Field() // <- only if you are using graphql
  readonly street: string;
}

export class CreateUserHttpRequest extends CreateUserRequest
  implements CreateUser {}

export class CreateUserMessageRequest extends CreateUserRequest
  implements CreateUser {}
