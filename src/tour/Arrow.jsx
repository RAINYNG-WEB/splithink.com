import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image: {
    marginTop: theme.spacing(1),
  },
}));

export default function TourLeft() {
  const classes = useStyles();
  return (
    <svg
      className={classes.image}
      width="50"
      height="80"
      strokeWidth="0.501"
      strokeLinejoin="bevel"
      fillRule="evenodd"
      overflow="visible"
      viewBox="0 0 75 80"
      x="0px"
      y="0px"
    >
      <g fill="none" stroke="black" transform="scale(1 -1)">
        <g transform="translate(0 -75)">
          <g>
            <path
              d="M 39.443,0.098 C 39.326,0.217 39.32,0.404 39.419,0.531 C 39.372,0.524 39.322,0.53 39.275,0.554 C 39.074,0.643 38.871,0.756 38.676,0.857 C 38.059,1.179 37.459,1.526 36.865,1.888 C 35.545,2.695 34.226,3.585 32.986,4.509 C 32.364,4.974 31.743,5.439 31.121,5.905 C 30.09,6.678 29.078,7.506 28.079,8.32 C 27.289,8.964 26.504,9.614 25.728,10.275 C 25.348,10.597 24.961,10.916 24.59,11.247 C 24.495,11.331 24.4,11.416 24.313,11.494 C 24.583,11.201 24.86,10.899 25.143,10.605 C 25.177,10.567 25.175,10.508 25.137,10.475 C 25.1,10.441 25.041,10.443 25.007,10.481 C 24.119,11.442 23.219,12.378 22.277,13.286 C 20.264,15.224 18.159,17.065 16.142,19 C 15.432,19.68 14.746,20.376 14.073,21.092 C 14.056,21.11 14.04,21.128 14.023,21.146 C 13.924,21.23 13.826,21.314 13.728,21.4 C 12.172,22.745 10.613,24.079 9.139,25.514 C 9.014,25.627 9.004,25.821 9.116,25.945 C 9.166,26.001 9.234,26.034 9.303,26.043 C 9.201,26.104 9.096,26.203 9.004,26.277 C 8.798,26.438 8.632,26.634 8.458,26.826 C 8.388,26.904 8.31,26.976 8.317,27.089 C 8.328,27.287 8.363,27.481 8.413,27.67 C 8.251,27.947 8.093,28.274 8.087,28.516 C 8.082,28.734 8.061,28.919 8.242,29.097 C 8.313,29.166 8.409,29.236 8.498,29.3 C 8.427,29.344 8.366,29.405 8.322,29.482 C 8.174,29.733 8.256,30.058 8.508,30.206 C 8.772,30.357 9.041,30.505 9.327,30.611 C 9.748,30.768 10.19,30.879 10.636,30.943 C 10.853,30.975 11.109,30.975 11.33,30.978 C 11.879,30.984 12.399,30.937 12.943,30.875 C 13.468,30.816 13.984,30.717 14.504,30.629 C 14.673,30.599 14.844,30.57 15.011,30.539 C 16.905,30.539 18.797,30.539 20.69,30.539 C 20.69,31.792 20.69,33.045 20.69,34.296 C 20.668,34.589 20.665,34.884 20.655,35.177 C 20.544,38.116 20.38,41.054 20.277,43.993 C 20.14,47.869 20.055,51.741 20.002,55.618 C 19.99,55.86 19.995,56.107 19.988,56.351 C 19.966,57.169 19.946,57.994 19.907,58.811 C 19.872,59.561 19.849,60.32 19.832,61.071 C 19.804,62.381 19.773,63.684 19.781,64.994 C 19.785,65.543 19.792,66.095 19.816,66.643 C 19.824,66.833 19.821,67.026 19.833,67.216 C 19.854,67.517 19.897,67.816 19.914,68.116 C 19.981,69.282 20.118,70.453 20.38,71.591 C 20.319,71.668 20.281,71.765 20.278,71.87 C 20.196,72.994 21.397,73.507 22.302,73.715 C 22.493,73.759 22.688,73.805 22.882,73.831 C 22.983,73.844 23.083,73.858 23.184,73.871 C 23.384,74.002 23.593,74.121 23.816,74.23 C 23.883,74.263 23.959,74.305 24.027,74.331 C 24.275,74.425 24.504,74.5 24.759,74.574 C 24.854,74.601 24.953,74.547 24.98,74.452 C 25.006,74.357 24.952,74.258 24.857,74.231 C 24.751,74.197 24.641,74.17 24.534,74.135 C 24.416,74.096 24.281,74.043 24.144,73.98 C 25.136,74.062 26.106,74.049 27.108,74.052 C 27.481,74.053 27.858,74.053 28.232,74.042 C 28.453,74.035 28.68,74.023 28.901,74.022 C 29.845,74.018 30.788,73.995 31.734,73.996 C 32.209,73.997 32.759,74.012 33.229,74.078 C 33.592,74.13 33.947,74.25 34.323,74.273 C 34.542,74.287 34.759,74.314 34.979,74.311 C 35.185,74.308 35.39,74.307 35.596,74.306 C 35.825,74.305 36.057,74.285 36.287,74.282 C 36.413,74.277 36.54,74.278 36.666,74.271 C 36.774,74.266 36.886,74.256 36.996,74.254 L 37.106,74.254 C 37.406,74.263 37.711,74.251 38.012,74.26 C 38.424,74.271 38.846,74.27 39.258,74.266 C 40.073,74.257 40.886,74.24 41.7,74.242 C 42.152,74.243 42.605,74.262 43.057,74.25 C 44.049,74.223 45.063,74.115 46.045,74.054 C 46.245,74.036 46.454,74.031 46.655,74.02 C 47.063,73.997 47.473,73.98 47.882,73.971 C 48.117,73.966 48.35,73.967 48.585,73.97 C 48.688,73.971 48.836,73.972 48.935,73.989 C 49.254,74.044 49.601,74.083 49.935,74.132 C 50.369,74.195 50.825,74.257 51.262,74.282 C 51.293,74.283 51.323,74.285 51.355,74.286 C 51.358,74.338 51.378,74.389 51.413,74.431 C 51.502,74.538 51.661,74.551 51.768,74.463 C 51.886,74.329 52.065,74.199 52.205,74.088 C 52.447,73.9 52.712,73.729 52.975,73.573 C 53.112,73.491 53.25,73.412 53.388,73.334 C 53.552,73.33 53.716,73.325 53.879,73.321 C 54.017,73.318 54.126,73.202 54.123,73.064 C 54.121,73.014 54.105,72.967 54.032,72.971 C 54.037,72.969 54.04,72.967 54.044,72.965 C 54.163,72.886 54.294,72.819 54.411,72.739 C 54.523,72.663 54.632,72.58 54.744,72.506 L 54.774,72.479 C 54.809,72.446 54.844,72.411 54.877,72.374 C 54.925,72.346 54.975,72.319 55.024,72.298 C 55.071,72.276 55.218,72.19 55.359,72.1 C 55.376,72.243 55.394,72.386 55.413,72.529 C 55.44,72.739 55.634,72.888 55.844,72.861 C 56.054,72.834 56.202,72.64 56.176,72.43 C 56.102,71.845 56.018,71.249 55.981,70.661 C 55.958,70.303 55.941,69.94 55.914,69.585 C 55.879,69.129 55.881,68.648 55.874,68.192 C 55.855,66.874 55.887,65.563 55.945,64.246 C 56.074,61.34 56.302,58.444 56.347,55.535 C 56.369,54.17 56.312,52.812 56.255,51.45 C 56.194,49.997 56.198,48.535 56.177,47.08 C 56.165,46.276 56.163,45.471 56.165,44.666 C 56.207,44.64 56.25,44.612 56.288,44.58 C 56.407,44.473 56.53,44.322 56.616,44.187 C 56.669,44.155 56.685,44.085 56.653,44.032 C 56.62,43.98 56.55,43.963 56.498,43.996 C 56.405,44.004 56.277,44.027 56.167,44.062 C 56.175,42.418 56.195,40.773 56.186,39.13 C 56.18,38.129 56.196,37.12 56.159,36.119 C 56.127,35.224 56.097,34.333 56.057,33.438 C 56.028,32.829 55.989,32.22 55.949,31.61 C 55.988,31.587 56.026,31.564 56.065,31.543 C 56.156,31.489 56.186,31.368 56.131,31.278 C 56.087,31.205 56.001,31.171 55.923,31.189 C 55.922,31.173 55.921,31.157 55.92,31.142 C 55.929,31.111 55.94,31.077 55.948,31.043 C 55.967,30.958 55.974,30.863 55.989,30.776 C 56.001,30.697 56.015,30.618 56.03,30.54 L 57.319,30.54 C 57.427,30.755 57.688,30.845 57.907,30.742 C 58.057,30.671 58.206,30.587 58.367,30.54 L 66.55,30.54 C 66.528,30.562 66.505,30.586 66.482,30.609 C 66.447,30.644 66.446,30.704 66.48,30.739 C 66.515,30.775 66.575,30.776 66.61,30.741 C 66.676,30.673 66.745,30.606 66.815,30.54 L 67.7,30.54 C 67.919,30.54 68.098,30.362 68.098,30.142 C 68.098,30.01 68.033,29.893 67.934,29.82 C 68.036,29.718 68.128,29.615 68.203,29.521 C 68.219,29.5 68.235,29.48 68.25,29.46 C 68.49,29.394 68.723,29.314 68.94,29.212 C 69.19,29.092 69.498,29.002 69.468,28.659 C 69.427,28.206 69.218,27.749 69.033,27.336 C 68.998,27.256 68.949,27.176 68.904,27.097 C 68.905,27.063 68.902,27.03 68.892,27 C 69.292,27.435 69.689,27.877 70.079,28.324 C 70.107,28.355 70.156,28.357 70.187,28.329 C 70.219,28.302 70.221,28.253 70.193,28.221 C 69.668,27.634 69.141,27.048 68.606,26.466 C 68.6,26.45 68.595,26.432 68.589,26.415 C 68.56,26.337 68.495,26.283 68.42,26.263 C 68.318,26.153 68.215,26.043 68.08,25.964 C 68.091,25.962 68.099,25.954 68.107,25.947 C 68.219,25.823 68.208,25.629 68.084,25.516 C 67.697,25.147 67.316,24.773 66.921,24.411 C 66.119,23.678 65.295,22.963 64.466,22.247 C 63.618,21.433 62.765,20.614 61.899,19.808 C 61.829,19.737 61.758,19.666 61.688,19.595 C 60.478,18.377 59.178,17.217 57.914,16.056 C 57.563,15.733 57.211,15.411 56.159,14.401 C 56.187,14.364 56.175,14.323 56.143,14.3 C 55.958,14.168 55.773,14.036 55.584,13.9 C 55.062,13.407 54.543,12.906 54.034,12.396 C 53.412,11.773 52.809,11.132 52.215,10.483 C 52.182,10.445 52.123,10.443 52.085,10.477 C 52.048,10.51 52.046,10.569 52.079,10.607 C 52.378,10.924 52.665,11.251 52.964,11.567 C 53.444,12.072 53.933,12.571 54.429,13.066 C 54.181,12.885 53.932,12.703 53.686,12.523 C 52.526,11.515 51.365,10.507 50.206,9.497 C 48.007,7.582 45.827,5.634 43.699,3.642 C 43.545,3.498 43.391,3.354 43.24,3.209 C 43.268,3.154 43.262,3.083 43.219,3.035 C 43.169,2.978 43.085,2.968 43.023,3.005 C 42.612,2.616 42.201,2.224 41.788,1.838 C 41.617,1.679 41.45,1.516 41.281,1.354 C 41.385,1.244 41.487,1.134 41.591,1.025 C 41.649,0.963 41.645,0.864 41.583,0.806 C 41.521,0.748 41.422,0.752 41.364,0.814 C 41.261,0.921 41.161,1.031 41.06,1.141 C 40.685,0.781 40.297,0.435 39.908,0.092 C 39.779,-0.034 39.569,-0.031 39.443,0.098 Z M 40.347,1.509 C 40.41,1.572 40.475,1.636 40.539,1.699 C 40.479,1.76 40.42,1.821 40.36,1.883 C 39.995,1.644 39.614,1.458 39.274,1.443 C 38.799,1.42 38.427,1.599 38.017,1.774 C 38.494,1.498 38.992,1.218 39.49,0.989 C 39.58,0.944 39.631,0.849 39.624,0.754 C 39.861,1.009 40.1,1.262 40.347,1.509 Z M 41.527,2.634 C 41.656,2.756 41.786,2.877 41.915,2.997 C 41.883,2.983 41.843,2.99 41.817,3.018 C 41.712,2.933 41.606,2.848 41.501,2.764 C 41.261,2.57 40.951,2.304 40.617,2.061 C 40.664,2.011 40.711,1.961 40.759,1.912 C 41.013,2.154 41.271,2.394 41.527,2.634 Z M 39.821,2.438 C 39.624,2.635 39.422,2.828 39.226,3.024 C 39.109,3.14 38.989,3.256 38.858,3.365 C 39.054,3.163 39.255,2.963 39.457,2.768 C 39.497,2.727 39.497,2.66 39.457,2.62 L 39.309,2.62 C 39.06,2.862 38.812,3.111 38.569,3.359 C 38.529,3.399 38.529,3.466 38.569,3.507 L 38.717,3.507 C 38.764,3.458 38.81,3.411 38.858,3.365 C 38.824,3.417 38.777,3.461 38.73,3.507 C 38.151,4.061 37.546,4.604 36.955,5.136 C 36.666,5.395 36.367,5.643 36.081,5.904 C 35.289,6.624 34.493,7.337 33.701,8.057 C 32.646,9.016 31.575,9.964 30.549,10.954 C 30.144,11.345 29.726,11.732 29.335,12.137 L 29.371,12.175 C 29.724,11.809 30.105,11.45 30.479,11.104 C 30.756,10.847 31.03,10.589 31.313,10.339 C 32.748,9.071 34.215,7.858 35.679,6.625 C 37.191,5.35 38.682,4.005 40.083,2.607 C 40.124,2.634 40.162,2.662 40.198,2.688 C 40.765,3.095 41.283,3.555 41.837,3.989 C 41.793,4.027 41.749,4.065 41.706,4.103 C 41.518,3.997 41.329,3.892 41.141,3.789 C 41.012,3.717 40.845,3.763 40.773,3.892 C 40.701,4.021 40.748,4.188 40.877,4.26 C 41.006,4.33 41.135,4.401 41.263,4.472 C 40.441,5.149 39.612,5.816 38.783,6.486 C 36.407,8.4 33.947,10.212 31.674,12.252 C 31.645,12.276 31.642,12.321 31.667,12.349 C 31.691,12.378 31.736,12.381 31.764,12.356 C 32.097,12.051 32.449,11.758 32.794,11.466 C 33.632,10.759 34.496,10.088 35.37,9.425 C 36.503,8.565 37.65,7.72 38.796,6.878 C 39.364,6.461 39.948,6.03 40.497,5.591 C 40.801,5.347 41.097,5.094 41.399,4.85 C 41.472,4.791 41.545,4.731 41.618,4.672 C 42.214,5.01 42.801,5.363 43.385,5.722 C 41.784,6.983 40.188,8.24 38.685,9.622 C 38.068,10.189 37.478,10.769 36.89,11.366 C 36.654,11.604 36.403,11.86 36.184,12.112 C 36.042,12.276 35.888,12.434 35.744,12.597 C 35.552,12.815 35.363,13.037 35.173,13.257 C 35.128,13.309 35.134,13.389 35.186,13.434 C 35.237,13.478 35.318,13.472 35.362,13.421 C 35.808,12.883 36.297,12.344 36.786,11.846 C 38.125,10.481 39.519,9.236 41.03,8.06 C 41.663,7.567 42.294,7.079 42.937,6.6 C 43.217,6.391 43.499,6.174 43.784,5.969 C 44.332,6.312 44.877,6.659 45.421,7.007 C 45.44,7.019 45.458,7.031 45.477,7.042 C 45.53,7.089 45.584,7.134 45.638,7.18 C 46.201,7.662 46.763,8.148 47.324,8.635 C 46.989,8.876 46.659,9.113 46.329,9.366 C 45.413,10.064 44.528,10.792 43.622,11.5 C 43.019,11.971 42.418,12.437 41.803,12.895 C 41.648,13.011 41.483,13.12 41.325,13.235 C 40.97,13.493 40.589,13.735 40.218,13.972 C 40.036,14.087 39.846,14.192 39.664,14.308 C 39.628,14.33 39.615,14.378 39.637,14.413 C 39.659,14.449 39.707,14.462 39.742,14.44 C 40.09,14.224 40.438,14.016 40.784,13.796 C 41.29,13.475 41.783,13.127 42.27,12.779 C 42.546,12.581 42.826,12.386 43.098,12.182 C 43.811,11.646 44.534,11.116 45.253,10.589 C 46.037,10.013 46.836,9.447 47.659,8.926 C 48.164,9.366 48.668,9.806 49.17,10.247 C 48.334,11.077 47.435,11.759 46.5,12.477 C 45.97,12.884 45.405,13.288 44.903,13.727 C 44.657,13.942 44.377,14.163 44.151,14.397 C 44.029,14.524 43.896,14.641 43.775,14.77 C 43.557,15.001 43.356,15.23 43.153,15.473 C 43.108,15.527 43.113,15.61 43.168,15.655 C 43.222,15.701 43.305,15.695 43.35,15.641 C 43.459,15.51 43.573,15.362 43.69,15.238 C 43.933,14.985 44.169,14.745 44.423,14.503 C 44.863,14.085 45.376,13.69 45.863,13.328 C 46.485,12.867 47.11,12.413 47.731,11.95 C 47.963,11.778 48.194,11.605 48.416,11.421 C 48.541,11.317 48.674,11.22 48.794,11.11 C 48.893,11.02 49,10.937 49.098,10.846 C 49.213,10.739 49.327,10.625 49.447,10.524 C 49.452,10.518 49.457,10.511 49.463,10.505 C 49.653,10.672 49.841,10.838 50.03,11.005 C 50.294,11.238 50.558,11.47 50.824,11.703 C 49.811,12.287 48.904,13.032 48.064,13.84 C 47.493,14.388 46.922,14.937 46.366,15.501 C 46.038,15.833 45.717,16.178 45.39,16.513 C 45.347,16.555 45.347,16.626 45.389,16.67 C 45.432,16.713 45.503,16.713 45.546,16.671 C 45.889,16.326 46.264,16.011 46.604,15.667 C 47.249,15.016 47.923,14.377 48.617,13.777 C 48.829,13.592 49.047,13.42 49.264,13.24 C 49.478,13.064 49.708,12.893 49.933,12.732 C 50.31,12.463 50.707,12.195 51.12,11.963 C 53.143,13.736 55.182,15.493 57.212,17.259 C 57.614,17.609 58.017,17.96 58.419,18.312 C 58.228,18.426 58.036,18.54 57.842,18.655 C 57.351,18.944 56.799,19.274 56.376,19.655 C 56.353,19.673 56.35,19.708 56.368,19.73 C 56.386,19.753 56.42,19.756 56.443,19.738 C 56.567,19.639 56.689,19.532 56.818,19.439 C 57.051,19.268 57.291,19.114 57.533,18.957 C 57.845,18.753 58.18,18.576 58.5,18.382 C 60.56,20.183 62.615,21.99 64.681,23.785 C 64.785,23.928 64.888,24.071 64.994,24.214 C 65.402,24.768 65.779,25.332 66.149,25.913 C 66.242,26.057 66.438,26.1 66.583,26.007 C 66.677,25.946 66.728,25.841 66.726,25.735 C 67,26.058 67.266,26.391 67.523,26.735 C 67.642,26.894 67.789,27.117 67.878,27.295 C 67.91,27.36 67.952,27.433 67.979,27.499 L 68.027,27.622 L 68.075,28.334 C 68.064,28.39 68.045,28.446 68.037,28.502 C 68.024,28.582 68.006,28.662 67.982,28.741 C 67.885,28.763 67.787,28.783 67.692,28.802 C 67.178,28.9 66.68,28.954 66.158,28.992 C 65.043,29.073 63.923,29.114 62.805,29.153 C 62.12,29.177 61.437,29.226 60.754,29.269 C 59.919,29.32 58.854,29.442 58.001,29.744 L 57.402,29.744 C 57.398,29.525 57.228,29.341 57.007,29.326 C 56.774,29.296 56.422,29.342 56.197,29.408 C 56.116,29.43 55.868,29.506 55.787,29.501 C 55.767,29.333 55.748,29.164 55.736,28.994 C 55.727,28.863 55.612,28.765 55.481,28.774 C 55.35,28.783 55.252,28.898 55.261,29.029 C 55.28,29.268 55.288,29.507 55.296,29.747 C 55.217,29.757 55.145,29.789 55.089,29.84 C 55.089,29.539 55.089,29.239 55.089,28.941 C 55.089,28.859 55.021,28.791 54.939,28.791 C 54.857,28.791 54.789,28.859 54.789,28.941 C 54.789,29.435 54.789,29.931 54.789,30.427 C 54.633,30.484 54.477,30.542 54.328,30.609 C 52.968,31.212 51.778,32.063 50.574,32.93 C 50.243,33.168 49.909,33.407 49.575,33.641 C 49.332,33.812 49.081,33.97 48.838,34.14 C 48.814,34.157 48.806,34.192 48.823,34.217 C 48.839,34.242 48.875,34.249 48.899,34.233 C 49.143,34.063 49.394,33.904 49.64,33.736 C 49.817,33.615 49.992,33.486 50.17,33.364 C 51.099,32.732 51.996,32.078 52.97,31.515 C 53.557,31.175 54.16,30.903 54.789,30.66 C 54.789,31.075 54.789,31.489 54.789,31.904 C 53.705,32.653 52.688,33.503 51.677,34.343 C 51.018,34.89 50.355,35.442 49.682,35.972 C 49.397,36.196 49.105,36.412 48.821,36.636 C 48.786,36.662 48.778,36.714 48.805,36.748 C 48.831,36.783 48.883,36.791 48.917,36.764 C 49.873,36.033 50.818,35.288 51.766,34.545 C 52.755,33.768 53.747,33.019 54.789,32.333 C 54.789,32.353 54.789,32.372 54.789,32.391 C 54.694,32.471 54.636,32.593 54.642,32.726 C 54.66,33.298 54.69,33.874 54.719,34.447 C 54.737,34.842 54.754,35.238 54.77,35.633 C 54.205,36.04 53.641,36.453 53.1,36.88 C 52.77,37.14 52.432,37.382 52.107,37.648 C 51.341,38.276 50.584,38.926 49.83,39.567 C 49.782,39.608 49.775,39.682 49.815,39.73 C 49.856,39.778 49.93,39.785 49.978,39.745 C 50.747,39.086 51.559,38.483 52.369,37.877 C 52.719,37.616 53.067,37.349 53.414,37.083 C 53.852,36.748 54.318,36.421 54.788,36.109 C 54.788,36.919 54.788,37.729 54.788,38.539 C 53.146,39.729 51.52,40.942 49.862,42.11 C 49.83,42.133 49.822,42.178 49.845,42.211 C 49.867,42.243 49.913,42.251 49.945,42.229 C 51.525,41.121 53.14,40.071 54.788,39.071 C 54.788,41.139 54.788,43.206 54.788,45.273 C 54.756,45.309 54.725,45.344 54.694,45.38 C 54.405,45.708 54.116,46.036 53.818,46.357 C 53.499,46.701 53.19,47.024 52.824,47.319 C 52.685,47.431 52.524,47.562 52.371,47.654 C 52.286,47.704 52.204,47.761 52.119,47.81 C 52.009,47.872 51.888,47.925 51.776,47.984 C 51.722,48.012 51.699,48.08 51.726,48.134 C 51.754,48.188 51.822,48.211 51.876,48.183 C 51.993,48.119 52.121,48.067 52.235,48.002 C 52.424,47.893 52.597,47.778 52.777,47.656 C 53.259,47.329 53.703,46.892 54.122,46.489 C 54.342,46.276 54.566,46.061 54.788,45.846 C 54.789,52.505 54.789,59.165 54.789,65.825 C 54.674,65.871 54.59,65.982 54.588,66.113 C 54.576,66.244 54.583,66.385 54.579,66.517 C 54.568,66.889 54.59,67.266 54.6,67.637 C 54.61,67.999 54.629,68.361 54.622,68.724 C 54.612,69.287 54.592,69.816 54.497,70.371 C 54.469,70.541 54.428,70.75 54.37,70.91 C 54.31,71.077 54.266,71.253 54.176,71.408 C 54.116,71.512 54.068,71.625 53.996,71.721 C 53.927,71.811 53.854,71.887 53.781,71.972 C 53.718,72.045 53.537,72.178 53.451,72.221 C 53.422,72.236 53.386,72.249 53.359,72.266 C 53.183,72.374 52.872,72.414 52.668,72.439 C 52.577,72.449 52.508,72.523 52.511,72.614 C 52.259,72.722 52.052,72.757 51.847,72.788 C 51.792,72.795 51.738,72.803 51.685,72.811 L 43.905,72.811 C 43.724,72.805 43.542,72.8 43.361,72.795 C 42.468,72.767 41.576,72.724 40.682,72.711 C 39.132,72.688 37.584,72.627 36.034,72.588 C 32.569,72.5 29.104,72.396 25.638,72.349 C 25.404,72.346 25.209,72.535 25.206,72.769 C 25.205,72.783 25.206,72.797 25.207,72.811 L 22.625,72.811 C 22.403,72.563 22.202,72.308 22.016,72.019 C 21.893,71.83 21.782,71.643 21.67,71.447 C 21.558,71.255 21.472,71.048 21.366,70.855 C 21.258,70.655 21.146,70.44 21.053,70.229 C 21.137,70.188 21.195,70.101 21.195,70.002 C 21.195,68.591 21.195,67.18 21.194,65.771 C 21.351,65.711 21.464,65.56 21.464,65.384 C 21.482,64.282 21.505,63.183 21.51,62.081 C 21.523,59.391 21.469,56.693 21.442,54.002 C 21.438,53.634 21.435,53.266 21.432,52.899 C 21.448,52.395 21.441,51.891 21.441,51.389 C 21.441,49.879 21.42,48.369 21.426,46.858 C 21.431,45.793 21.429,44.725 21.439,43.66 C 21.446,42.952 21.466,42.241 21.468,41.534 C 21.469,41.041 21.446,40.541 21.438,40.047 C 21.424,39.156 21.421,38.267 21.42,37.376 C 21.418,35.187 21.523,33.002 21.708,30.821 C 21.809,30.89 21.905,30.964 21.992,31.041 C 22.095,31.133 22.187,31.228 22.287,31.322 L 22.472,31.322 C 22.522,31.272 22.522,31.187 22.472,31.137 C 22.343,30.993 22.182,30.856 22.033,30.735 C 21.946,30.664 21.858,30.599 21.768,30.538 L 21.875,30.538 C 22.095,30.538 22.273,30.36 22.273,30.14 C 22.273,29.92 22.095,29.742 21.875,29.742 C 21.845,29.741 21.817,29.741 21.788,29.741 C 21.792,29.7 21.797,29.658 21.802,29.618 C 21.81,29.529 21.744,29.449 21.655,29.441 C 21.566,29.433 21.486,29.499 21.479,29.588 C 21.473,29.638 21.468,29.69 21.462,29.741 L 21.195,29.741 C 21.195,29.617 21.195,29.493 21.195,29.368 C 21.195,29.229 21.081,29.116 20.942,29.116 C 20.803,29.116 20.69,29.229 20.69,29.368 C 20.69,29.492 20.69,29.616 20.69,29.74 C 20.283,29.739 19.877,29.739 19.472,29.739 C 19.106,29.694 18.737,29.674 18.373,29.67 C 17.82,29.663 17.267,29.693 16.711,29.738 C 14.948,29.738 13.183,29.738 11.418,29.739 C 11.356,29.578 11.208,29.459 11.026,29.447 C 10.936,29.428 10.854,29.413 10.764,29.387 C 10.549,29.325 10.352,29.206 10.157,29.1 C 9.912,28.967 9.644,28.791 9.422,28.624 L 9.216,28.468 C 9.244,28.417 9.276,28.348 9.3,28.295 C 9.381,28.12 9.532,27.929 9.642,27.769 C 9.829,27.498 10.062,27.222 10.281,26.975 C 10.534,26.689 10.796,26.409 11.048,26.124 C 11.171,25.985 11.311,25.856 11.437,25.719 C 11.934,25.181 12.487,24.671 13.011,24.158 C 13.512,23.668 14.028,23.177 14.545,22.706 C 15.709,21.646 16.851,20.555 18.024,19.508 C 18.469,19.111 18.887,18.679 19.324,18.28 C 21.54,16.131 23.814,14.048 26.149,12.027 C 27.032,11.263 27.926,10.514 28.823,9.767 C 29.516,9.19 30.221,8.628 30.913,8.05 C 32.116,7.044 33.324,6.049 34.541,5.06 C 34.937,4.738 35.346,4.428 35.747,4.113 C 35.965,3.941 36.192,3.781 36.403,3.601 C 36.601,3.433 36.785,3.248 36.978,3.072 C 37.175,3.013 37.372,2.955 37.568,2.885 C 37.787,2.807 37.994,2.71 38.206,2.615 C 38.467,2.497 38.931,2.201 39.217,2.215 C 39.404,2.223 39.621,2.322 39.821,2.438 Z M 36.338,2.906 C 36.189,2.997 36.042,3.092 35.902,3.196 C 35.708,3.34 35.516,3.488 35.326,3.637 C 35.301,3.61 35.269,3.593 35.231,3.595 C 35.394,3.445 35.847,3.134 36.305,2.834 C 36.314,2.858 36.324,2.882 36.338,2.906 Z M 42.432,3.472 C 42.43,3.473 42.429,3.474 42.428,3.475 C 42.354,3.404 42.279,3.334 42.204,3.263 C 42.28,3.333 42.355,3.402 42.432,3.472 Z M 42.848,3.847 C 42.804,3.811 42.759,3.775 42.713,3.738 C 42.715,3.736 42.718,3.734 42.721,3.733 C 42.764,3.771 42.806,3.809 42.848,3.847 Z M 34.692,4.126 C 34.197,4.497 33.701,4.872 33.21,5.249 C 33.17,5.279 33.129,5.31 33.089,5.34 C 33.266,5.172 33.444,5.004 33.623,4.839 C 33.799,4.676 33.972,4.511 34.145,4.346 C 34.321,4.216 34.498,4.086 34.676,3.958 C 34.703,3.939 34.729,3.919 34.757,3.9 L 34.986,3.9 C 34.889,3.975 34.79,4.051 34.692,4.126 Z M 42.718,4.692 C 42.503,4.564 42.283,4.434 42.062,4.306 C 42.09,4.282 42.119,4.258 42.147,4.233 C 42.34,4.386 42.532,4.541 42.718,4.692 Z M 30.862,7.033 C 30.43,7.364 30,7.699 29.575,8.042 C 29.203,8.34 28.834,8.64 28.494,8.919 C 28.853,8.603 29.241,8.267 29.636,7.936 C 30.221,7.446 30.806,6.96 31.631,6.36 C 31.377,6.587 31.12,6.81 30.862,7.033 Z M 43.409,8.53 C 43.104,8.723 42.803,8.93 42.513,9.145 C 41.804,9.671 41.15,10.272 40.52,10.89 C 40.226,11.177 39.931,11.459 39.644,11.755 C 39.006,12.413 38.351,13.057 37.714,13.717 C 37.678,13.753 37.678,13.814 37.715,13.85 C 37.751,13.885 37.812,13.885 37.848,13.849 C 38.445,13.236 39.065,12.634 39.682,12.041 C 40.452,11.301 41.268,10.559 42.124,9.918 C 42.615,9.549 43.107,9.178 43.629,8.855 C 44.021,8.613 44.418,8.411 44.791,8.138 C 44.857,8.104 44.884,8.02 44.85,7.954 C 44.817,7.888 44.733,7.862 44.667,7.895 C 44.197,8.027 43.816,8.272 43.409,8.53 Z M 50.054,15.063 C 49.8,15.296 49.56,15.545 49.324,15.796 C 48.705,16.456 48.123,17.122 47.589,17.851 C 47.55,17.904 47.561,17.98 47.614,18.019 C 47.667,18.059 47.743,18.048 47.783,17.994 C 48.362,17.205 49.006,16.486 49.696,15.788 C 50.454,15.023 51.286,14.332 52.209,13.775 C 52.286,13.726 52.31,13.624 52.262,13.547 C 52.213,13.47 52.111,13.446 52.034,13.495 C 51.307,13.933 50.677,14.491 50.054,15.063 Z M 55.281,13.907 C 55.301,13.926 55.317,13.941 55.328,13.952 C 55.305,13.933 55.278,13.909 55.25,13.885 C 55.261,13.893 55.272,13.901 55.281,13.907 Z M 51.621,16.546 C 51.263,16.847 50.922,17.166 50.57,17.474 C 50.168,17.826 49.764,18.201 49.374,18.567 C 49.322,18.614 49.318,18.697 49.366,18.749 C 49.413,18.8 49.496,18.804 49.547,18.756 C 50.031,18.303 50.533,17.868 51.028,17.427 C 51.566,16.946 52.165,16.456 52.76,16.05 C 53.25,15.716 53.743,15.383 54.279,15.128 C 54.369,15.08 54.403,14.967 54.354,14.878 C 54.306,14.788 54.194,14.755 54.104,14.803 C 53.212,15.285 52.396,15.892 51.621,16.546 Z M 53.029,18.446 C 52.917,18.546 52.787,18.677 52.67,18.765 C 52.601,18.818 52.533,18.877 52.464,18.928 C 52.405,18.971 52.338,19.012 52.281,19.059 C 52.147,19.17 51.95,19.26 51.799,19.353 C 51.773,19.367 51.764,19.401 51.778,19.428 C 51.791,19.454 51.826,19.463 51.853,19.449 C 51.903,19.415 51.974,19.384 52.029,19.354 C 52.12,19.303 52.229,19.236 52.315,19.177 C 52.572,19.001 52.806,18.809 53.043,18.605 C 53.712,18.031 54.426,17.295 55.274,16.995 C 55.333,16.969 55.36,16.899 55.334,16.84 C 55.308,16.781 55.238,16.754 55.179,16.78 C 54.33,17.13 53.698,17.844 53.029,18.446 Z M 9.856,25.837 C 9.84,25.854 9.822,25.873 9.805,25.892 C 9.735,25.895 9.668,25.904 9.6,25.921 C 9.683,25.851 9.766,25.781 9.848,25.712 C 9.841,25.754 9.844,25.795 9.856,25.837 Z M 67.303,29.744 L 66.659,29.744 C 66.664,29.743 66.669,29.742 66.673,29.742 C 66.905,29.708 67.147,29.677 67.39,29.637 C 67.36,29.673 67.332,29.708 67.303,29.744 Z M 51.899,29.969 C 51.739,30.071 51.571,30.164 51.41,30.265 C 50.868,30.608 50.275,30.887 49.73,31.229 C 49.275,31.515 48.808,31.88 48.395,32.226 C 48.374,32.243 48.37,32.274 48.387,32.295 C 48.404,32.316 48.435,32.32 48.456,32.303 C 48.838,31.966 49.287,31.725 49.724,31.47 C 49.929,31.352 50.136,31.23 50.338,31.109 C 50.741,30.869 51.16,30.65 51.564,30.41 C 51.701,30.329 51.859,30.243 51.989,30.154 C 52.144,30.047 52.313,29.933 52.474,29.836 C 52.52,29.805 52.533,29.741 52.502,29.695 C 52.472,29.648 52.408,29.635 52.361,29.666 C 52.205,29.761 52.053,29.869 51.899,29.969 Z M 55.223,30.521 C 55.202,30.638 55.183,30.756 55.164,30.879 C 55.149,30.964 55.163,31.046 55.16,31.131 C 55.157,31.225 55.139,31.341 55.127,31.436 C 55.115,31.522 55.105,31.609 55.097,31.696 C 55.094,31.697 55.091,31.699 55.089,31.701 C 55.089,31.283 55.089,30.863 55.089,30.444 C 55.127,30.477 55.172,30.504 55.223,30.521 Z M 21.375,30.613 C 21.362,30.752 21.348,30.891 21.337,31.031 C 21.338,30.885 21.342,30.74 21.345,30.597 C 21.355,30.601 21.365,30.607 21.375,30.613 Z M 51.296,44.741 C 51.246,44.789 51.245,44.868 51.293,44.918 C 51.34,44.967 51.42,44.968 51.469,44.921 C 52.089,44.286 52.87,43.708 53.622,43.239 C 53.946,43.036 54.264,42.82 54.594,42.625 C 54.682,42.567 54.705,42.447 54.647,42.359 C 54.589,42.271 54.469,42.247 54.381,42.306 C 53.307,43.078 52.227,43.792 51.296,44.741 Z M 55.392,60.508 C 55.349,61.276 55.304,62.04 55.262,62.805 C 55.26,62.83 55.259,62.854 55.257,62.88 C 55.258,62.861 55.258,62.843 55.259,62.826 C 55.299,61.189 55.292,59.55 55.33,57.914 C 55.343,57.377 55.328,56.834 55.348,56.297 C 55.349,56.269 55.349,56.24 55.35,56.212 C 55.373,57.645 55.387,59.079 55.392,60.508 Z M 55.171,64.684 C 55.164,64.892 55.149,65.101 55.146,65.309 C 55.142,65.502 55.134,65.697 55.127,65.891 C 55.114,65.879 55.101,65.868 55.088,65.859 C 55.089,65.482 55.089,65.105 55.088,64.728 C 55.121,64.715 55.145,64.684 55.147,64.647 C 55.145,64.513 55.167,64.367 55.176,64.232 C 55.183,64.127 55.193,64.017 55.204,63.909 C 55.191,64.167 55.18,64.425 55.171,64.684 Z M 55.151,69.657 C 55.117,70.03 55.072,70.403 55.013,70.773 C 54.965,71.066 54.888,71.317 54.818,71.599 C 54.793,71.693 54.82,71.793 54.817,71.888 C 54.642,71.984 54.463,72.071 54.268,72.154 C 54.207,72.179 54.146,72.204 54.085,72.227 C 54.679,71.667 54.927,70.67 55.045,69.906 C 55.082,69.668 55.113,69.427 55.132,69.187 C 55.133,69.164 55.135,69.141 55.136,69.118 C 55.138,69.298 55.143,69.477 55.151,69.657 Z M 21.788,72.63 C 21.675,72.578 21.559,72.517 21.464,72.443 C 21.485,72.363 21.484,72.276 21.457,72.194 C 21.449,72.174 21.442,72.155 21.442,72.136 C 21.529,72.326 21.655,72.48 21.788,72.63 Z M 40.042,73.483 C 41.604,73.506 43.168,73.51 44.73,73.499 C 44.842,73.534 44.956,73.568 45.069,73.596 C 44.601,73.614 44.131,73.643 43.663,73.659 C 43.513,73.664 43.365,73.674 43.215,73.672 C 42.976,73.668 42.73,73.661 42.492,73.663 C 41.415,73.62 40.311,73.614 39.233,73.65 C 38.988,73.646 38.743,73.653 38.498,73.649 C 37.862,73.637 37.221,73.624 36.584,73.628 C 36.163,73.631 35.744,73.649 35.323,73.651 C 35.181,73.652 35.022,73.654 34.881,73.643 C 34.691,73.627 34.5,73.62 34.31,73.595 C 34.228,73.584 34.145,73.564 34.062,73.556 C 33.954,73.545 33.768,73.48 33.694,73.481 C 33.542,73.45 33.395,73.412 33.24,73.395 C 33.006,73.371 32.779,73.348 32.544,73.33 C 32.539,73.329 32.535,73.329 32.532,73.329 L 32.607,73.329 C 35.083,73.385 37.562,73.445 40.042,73.483 Z M 51.674,73.911 L 51.659,73.911 C 51.309,73.904 50.899,73.875 50.552,73.822 C 50.337,73.789 50.119,73.763 49.902,73.731 C 50.622,73.647 51.33,73.53 52.033,73.371 C 52.225,73.365 52.418,73.36 52.611,73.355 C 52.281,73.518 51.973,73.704 51.674,73.911 Z"
              stroke="none"
              fill="#000000"
              strokeWidth="0.5"
              fillRule="evenodd"
              markerStart="none"
              markerEnd="none"
              strokeMiterlimit="79.8403193612775"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
