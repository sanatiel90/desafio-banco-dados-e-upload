import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
// import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionRepositoyry = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRepositoyry.findOne(id);

    if (!transaction) {
      throw new AppError('Transact does not exists');
    }

    await transactionRepositoyry.remove(transaction);
  }
}

export default DeleteTransactionService;
