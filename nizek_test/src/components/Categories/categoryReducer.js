import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

export const initialState = () => {
    return {
        categories: [],
        selectedBooks: [],
    };
};

export const categoryReducer = (state, { type, payload }) => {
    switch (type) {
        case 'add-category': {
            return {
                ...state,
                selectedBooks: [],
                categories: [
                    ...state.categories,
                    {
                        title: payload,
                        books: [],
                        id: uuid(),
                    },
                ],
            };
        }

        case 'update-category': {
            const updateField = () => {
                const findIndex = state.categories.findIndex((input) => input.id === payload.id);
                state.categories[findIndex].books = payload.books;
            };

            updateField();
            return {
                ...state,
                categories: state.categories,
                selectedBooks: payload.books
            };
        }

        case 'delete-book': {
            toast.success('book removed');
            const findIndex = state.categories.findIndex((input) => input.id === payload.categoryId);    
            const books = state.categories[findIndex].books.filter((input) => input.id !== payload.bookId);
            state.categories[findIndex].books = books;

            return {
                ...state,
                categories: state.categories,
            }
        }

        default:
            return state;
    }
};
