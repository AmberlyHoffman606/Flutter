export const AppConstants = {

  // Baselines for all models
  BASELINES: {
    flm: {
      male: {
        age: 3.881563798,
        cholTotal: 5.358941988,
        cholHDL: 3.804437795,
        sbp: 4.372376891,
        treatingBP: 0.4928472,
        smoker: 0.3522,
        diabetic: 0.065
      },
      female: {
        age: 3.893859035,
        cholTotal: 5.3711103036,
        cholHDL: 4.053533568,
        sbp: 4.266133407,
        treatingBP: 0.568559937,
        smoker: 0.3423,
        diabetic: 0.0376
      }
    },
    fbm: {
      male: {
        age: 3.8815638,
        bmi: 3.13549422,
        sbp: 4.37237689,
        treatingBP: 0.4928472,
        smoker: 0.3522,
        diabetic: 0.065
      },
      female: {
        age: 3.89385903,
        bmi: 3.13549422,
        sbp: 4.34493891,
        treatingBP: 0.48975444,
        smoker: 0.3423,
        diabetic: 0.0376
      }
    },
    rm: {
      male: {
        age: 4.143135,
        sbp: 4.85203,
        cholTotal: 5.313206,
        cholHDL: 3.749504,
        crp: -0.150823,
        smoker: 0.032,
        famCVD: 0.108
      },
      female: {
        age: 52,
        sbp: 4.828314,
        cholTotal: 5.337538,
        cholHDL: 3.949319,
        crp: 0.693147,
        smoker: 0.116,
        famCVD: 0.129
      }
    }
  },
  // Betas for all models
  BETAS: {
    flm: {
      male: {
        age: 3.06117,
        cholTotal: 1.1237,
        cholHDL: -0.93263,
        sbp: 1.93303,
        treatingBP: 1.99881,
        smoker: 0.65451,
        diabetic: 0.57367
      },
      female: {
        age: 2.32888,
        cholTotal: 1.10904,
        cholHDL: -0.7083,
        sbp: 2.76157,
        treatingBP: 2.82263,
        smoker: 0.52873,
        diabetic: 0.69154
      }
    },
    fbm: {
      male: {
        age: 3.11296,
        bmi: 0.79277,
        sbp: 1.85508,
        treatingBP: 1.9672,
        smoker: 0.70953,
        diabetic: 0.5316,
      },
      female: {
        age: 2.7207,
        bmi: 0.51125,
        sbp: 2.81291,
        treatingBP: 2.88267,
        smoker: 0.61868,
        diabetic: 0.77763
      }
    },
    rm: {
      male: {
        age: 4.385,
        sbp: 2.607,
        cholTotal: 0.963,
        cholHDL: -0.772,
        crp: 0.102,
        smoker: 0.405,
        famCVD: 0.541
      },
      female: {
        age: 0.0799,
        sbp: 3.137,
        cholTotal: 1.382,
        cholHDL: -1.172,
        crp: 0.18,
        smoker: 0.818,
        famCVD: 0.438
      }
    }
  },

  // Exponent bases for all models
  EXP_BASES: {
    flm: {
      male: 0.88936,
      female: 0.95012
    },
    fbm: {
      male: 0.88431,
      female: 0.94833
    },
    rm: {
      male: 0.899,
      female: 0.98634
    }
  },
}

export default AppConstants;
