import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
declare const notFound: (req: Request, res: Response, next: NextFunction) => void;
declare const errorHandler: ErrorRequestHandler;
export { notFound, errorHandler };
