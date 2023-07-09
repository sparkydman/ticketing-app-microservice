import signupModel, { IUserDocument } from '../models/signup-model';
import { SignUpType } from '../schema/signup-schema';
import { FilterQuery, QueryOptions } from 'mongoose';

export const addUser = (user: SignUpType['body']): Promise<IUserDocument> => {
  return signupModel.create(user);
};

export const getUser = (
  query: FilterQuery<IUserDocument>,
  options: QueryOptions = {}
) => {
  return signupModel.findOne(query, undefined, options);
};
