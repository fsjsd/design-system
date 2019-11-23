import React, { CSSProperties } from "react";

export const ToyShooter = ({
  color = "rgba(255,255,255,0.2)",
  style
}: {
  color?: string;
  style?: CSSProperties;
}) => (
  <div style={{ ...style, lineHeight: 0 }}>
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 338 75"
        preserveAspectRatio="none"
      >
        <g transform="translate(0,0)" fill={color}>
          <title>ToyShooter</title>
          <path
            stroke="null"
            id="svg_2"
            d="m19.854386,7.016975l-1.993459,10.605201l8.292788,0l-1.674505,8.69148l-8.292788,0l-2.631366,13.236103c-0.318953,1.515492 -0.637907,3.588226 -0.637907,4.943778c0,1.91372 0.797384,3.269272 3.269272,3.269272c1.036599,0 2.152935,0 3.189534,-0.159477l-1.355552,9.010434c-1.43529,0.558168 -4.305871,0.877122 -6.77776,0.877122c-6.857498,0 -10.126307,-3.587762 -10.126307,-8.451802c0,-2.152935 0.239215,-4.225669 0.797384,-7.255726l3.030057,-15.46924l-4.943778,0l1.594767,-8.69148l5.023516,0l1.43529,-7.335928l11.800812,-3.269736z"
          />
          <path
            stroke="null"
            id="svg_3"
            d="m62.354927,32.771999c0,14.273165 -9.727615,24.718425 -23.283135,24.718425c-9.887555,0 -16.505375,-6.458806 -16.505375,-16.106683c0,-13.555056 9.408662,-24.638687 23.283135,-24.638687c10.44526,0 16.505375,7.176452 16.505375,16.026945zm-27.907959,8.372527c0,4.545086 2.232674,7.575143 6.219591,7.575143c6.29933,0 9.807817,-9.16991 9.807817,-15.867932c0,-3.588226 -1.515029,-7.415667 -6.139853,-7.415667c-6.618283,0 -9.967294,9.64834 -9.887555,15.708455z"
          />
          <path
            stroke="null"
            id="svg_4"
            d="m75.59242,17.622176l2.392151,16.983805c0.558168,3.986918 0.95686,6.77776 1.275814,9.249649l0.159477,0c0.877122,-2.312412 1.754244,-4.864039 3.428749,-9.089708l7.096713,-17.143282l12.120229,0l-13.954211,27.987698c-5.182993,10.365522 -9.807817,17.462235 -14.990346,22.326275c-4.545086,4.305407 -9.967294,6.219591 -12.518457,6.61782l-2.551627,-9.807354c1.833982,-0.558168 4.385146,-1.515492 6.618283,-3.109796c2.631366,-1.833982 4.864039,-4.146394 6.298866,-6.77776c0.398692,-0.558168 0.398692,-1.036135 0.239215,-1.91372l-7.73462,-35.323162l12.119766,0l0,-0.000464z"
          />
          <path
            stroke="null"
            id="svg_5"
            d="m97.919622,46.327518c2.232674,1.116337 6.458806,2.711104 10.206509,2.711104c3.269272,0 4.943778,-1.594303 4.943778,-3.508487c0,-1.913257 -1.275814,-3.268809 -4.864039,-5.023053c-4.545086,-2.232674 -8.292788,-5.501946 -8.292788,-10.365986c0,-8.053573 7.096713,-13.396043 17.143282,-13.396043c4.545086,0 8.132848,0.877122 10.046569,1.993459l-2.711104,8.133312c-1.674505,-0.797384 -4.385609,-1.754244 -7.814358,-1.754244c-3.030057,0 -5.103254,1.355552 -5.103254,3.428749c0,1.594767 1.594767,2.950319 4.784301,4.465348c4.226133,2.152935 8.69148,5.262731 8.69148,10.684939c0,8.930695 -7.57468,13.874473 -17.860927,13.794271c-4.943778,-0.159477 -9.64834,-1.355552 -11.960289,-3.109796l2.790842,-8.053573z"
          />
          <path
            stroke="null"
            id="svg_6"
            d="m125.667177,56.613302l10.684939,-56.613302l11.482323,0l-4.305871,22.56549l0.159477,0.079738c3.189534,-3.588226 7.255726,-5.900638 12.439183,-5.900638c6.060115,0 9.807817,3.827441 9.807817,10.525462c0,1.833982 -0.318953,4.784301 -0.718109,7.016975l-4.225669,22.326275l-11.482323,0l3.986918,-21.369414c0.318953,-1.515029 0.558168,-3.189534 0.558168,-4.864039c0,-2.551627 -1.116337,-4.385609 -3.986918,-4.385609c-3.986918,0 -8.053573,4.864039 -9.568602,12.758136l-3.349011,17.860927l-11.482323,0z"
          />
          <path
            stroke="null"
            id="svg_7"
            d="m207.716086,32.771999c0,14.273165 -9.727152,24.718425 -23.283135,24.718425c-9.887555,0 -16.505839,-6.458806 -16.505839,-16.106683c0,-13.555056 9.409125,-24.638687 23.283598,-24.638687c10.44526,0 16.505375,7.176452 16.505375,16.026945zm-27.907959,8.372527c0,4.545086 2.23221,7.575143 6.219128,7.575143c6.29933,0 9.807817,-9.16991 9.807817,-15.867932c0,-3.588226 -1.515029,-7.415667 -6.139853,-7.415667c-6.61782,0 -9.966367,9.64834 -9.887092,15.708455z"
          />
          <path
            stroke="null"
            id="svg_8"
            d="m248.700207,32.771999c0,14.273165 -9.727615,24.718425 -23.283598,24.718425c-9.887092,0 -16.505375,-6.458806 -16.505375,-16.106683c0,-13.555056 9.409125,-24.638687 23.283135,-24.638687c10.446188,0 16.505839,7.176452 16.505839,16.026945zm-27.907496,8.372527c0,4.545086 2.23221,7.575143 6.219128,7.575143c6.29933,0 9.807354,-9.16991 9.807354,-15.867932c0,-3.588226 -1.515029,-7.415667 -6.139389,-7.415667c-6.618747,0 -9.967294,9.64834 -9.887092,15.708455z"
          />
          <path
            stroke="null"
            id="svg_9"
            d="m270.14936,7.016975l-1.992995,10.605201l8.292325,0l-1.674042,8.69148l-8.292788,0l-2.631366,13.236103c-0.318953,1.515492 -0.637907,3.588226 -0.637907,4.943778c0,1.91372 0.797384,3.269272 3.269272,3.269272c1.036135,0 2.152935,0 3.189534,-0.159477l-1.355552,9.010434c-1.43529,0.558168 -4.305871,0.877122 -6.77776,0.877122c-6.857498,0 -10.126771,-3.587762 -10.126771,-8.451802c0,-2.152935 0.239679,-4.225669 0.797384,-7.255726l3.030057,-15.46924l-4.943314,0l1.594303,-8.69148l5.023516,0l1.43529,-7.335928l11.800812,-3.269736z"
          />
          <path
            stroke="null"
            id="svg_10"
            d="m304.117897,54.380628c-4.545086,2.312412 -10.206509,3.109796 -14.51238,3.109796c-11.162906,0 -16.904067,-6.378604 -16.904067,-16.505375c0,-11.881014 8.611742,-24.240459 22.72543,-24.240459c7.893633,0 13.555056,4.385609 13.555056,11.641799c0,9.967294 -9.64834,13.555056 -25.276594,13.156364c0,1.116337 0.398692,2.870581 1.196075,3.986918c1.515492,1.993922 4.146394,3.030521 7.495405,3.030521c4.226133,0 7.813895,-0.95686 10.92369,-2.471889l0.797384,8.292325zm-5.900638,-25.993775c0,-1.91372 -1.594303,-3.269272 -4.225669,-3.269272c-5.34247,0 -8.37299,4.385609 -9.16991,8.053573c8.930695,0.079738 13.396043,-1.196075 13.396043,-4.704099l0,-0.080202l-0.000464,0z"
          />
          <path
            stroke="null"
            id="svg_11"
            d="m307.467372,56.613302l4.385609,-23.203396c1.115873,-5.900638 1.594303,-12.439183 1.993459,-15.78773l9.96683,0c-0.239215,2.631366 -0.477967,5.262731 -0.717645,7.973835l0.239679,0c2.711104,-5.182993 7.096713,-8.850957 12.438719,-8.850957c0.717645,0 1.43529,0 2.152935,0.079738l-2.23221,11.163369c-0.558168,0 -1.196075,-0.079738 -1.833982,-0.079738c-7.335928,0 -10.764677,6.538545 -12.199504,14.192963l-2.711104,14.51238l-11.482786,0l0,-0.000464z"
          />
        </g>
      </svg>
    </div>
  </div>
);