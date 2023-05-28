import toast from 'react-hot-toast';

const showMessage = (content, type) => {
  switch (type) {
    case 'success':
      toast.success(content);
      break;
    case 'error':
      toast.error(content);
      break;
    default:
      toast(content);
  }
};

export const notification = (content, options, type) => {
  if (options.showServerMessage && content) {
    showMessage(content, type);
  }
};
