import express from 'express';
import { BranchController } from './Branch.controller';

const router = express.Router();

router.post('/create-branch', BranchController.createBranch)

export const BranchRouter = router;