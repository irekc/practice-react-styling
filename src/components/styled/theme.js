import { css } from 'styled-components';

const theme = {
  alert: {
      primary: css`
      color: #004085;
      background-color: #cce5ff;
      border-color: #b8daff;
      `,
      warning: css`
      color: #856404;
      background-color: #fff3cd;
      border-color: #ffeeba;
      `
  },
  button: {
      variant: {
          primary: css`
          color: #fff;
          background-color: #007bff;
          border-color: #007bff;

          &:hover {
            color: #fff;
            background-color: #0069d9;
            border-color: #0062cc;
          }
          `,
          success: css`
          color: #fff;
          background-color: #28a745;
          border-color: #28a745;

          &:hover {
            color: #fff;
            background-color: #218838;
            border-color: #1e7e34;
          }
          `
      },
      size: {
          lg: css`
          padding: 0.5rem 1rem;
          font-size: 1.25rem;
          line-height: 1.5;
          border-radius: 0.3rem;
          `,
          sm: css`
          padding: 0.25rem 0.5rem;
          font-size: .875rem;
          line-height: 1.5;
          border-radius: 0.2rem;
          `
      }
  },
  breadcrumb: {

  }
}

export default theme