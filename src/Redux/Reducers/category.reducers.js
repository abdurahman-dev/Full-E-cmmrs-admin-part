import { categoryConstants } from "../Actions/constants";

const initState = {
  loading: false,
  error: null,
  categories: [],
};

const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];
  if (parentId===undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        children: [],
      },
    ];
  }
  for (let cat of categories) {
    
    // eslint-disable-next-line eqeqeq
    if (cat._id == parentId) {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(
                parentId,
                [
                  ...cat.children,
                  {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children,
                  },
                ],
                category
              )
            : [],
      });
    } else {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(parentId, cat.children, category)
            : [],
      });
    }
  }
  return myCategories;
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORY_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case categoryConstants.GET_ALL_CATEGORY_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        categories: action.payload,
      };
      return newState;
    }
    case categoryConstants.GET_ALL_CATEGORY_FAILED: {
      const newState = {
        ...state,
        error: action.payload,
      };
      return newState;
    }
    case categoryConstants.ADD_CATEGORY_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case categoryConstants.ADD_CATEGORY_SUCCESS: {
      const cate = action.payload.category;
      const categories = state.categories;
      const updatedCategories = buildNewCategories(
        cate.parentId,
        categories,
        cate
      );
      const newState = {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
      return newState;
    }
    case categoryConstants.ADD_CATEGORY_FAILED: {
      const newState = {
        ...initState,
        error: action.payload,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default categoryReducer;
