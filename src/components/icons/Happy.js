import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgHappy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 44 44"
    {...props}
  >
    <G filter="url(#happy_svg__a)">
      <G clipPath="url(#happy_svg__b)">
        <G clipPath="url(#happy_svg__c)">
          <Path fill="#AFF06E" d="M38 5H6v32h32z" />
          <Path
            fill="#E55725"
            d="M22.13 26.537a3.9 3.9 0 0 0-2.876 1.272 9.6 9.6 0 0 0 2.743.398 9.4 9.4 0 0 0 2.95-.469 3.9 3.9 0 0 0-2.817-1.205z"
          />
          <Path
            fill="#61C0EB"
            d="M36.572 20.762c.608.394 1.094.937 1.326 1.696.227.73.094 1.641-.455 2.11-.489.42-1.204.398-1.749.082-.891-.514-1.483-1.738-1.842-2.742-.293-.823-.702-1.396-1.293-1.883-.137-.112-.06-.35.106-.331 1.24.134 2.786.35 3.907 1.071zM7.432 20.762c-.609.394-1.09.937-1.327 1.696-.226.73-.093 1.641.456 2.11.488.42 1.203.398 1.749.082.89-.514 1.483-1.738 1.842-2.742.292-.823.701-1.396 1.293-1.883.136-.112.06-.35-.106-.331-1.24.134-2.79.35-3.907 1.071z"
          />
          <Path
            fill="#0B1215"
            d="M14.687 22.652c-.425 0-.721.457-.608.919.755 3.07 4.01 5.384 7.92 5.384s7.209-2.34 7.934-5.44c.103-.439-.216-.86-.619-.86H14.687zM31.517 19.497c.15.104.346-.015.346-.213 0-1.18-.851-2.132-1.902-2.132s-1.898.953-1.898 2.129c0 .2.196.32.345.216a2.72 2.72 0 0 1 1.556-.495c.572 0 1.104.182 1.556.495zM15.603 19.497c.15.104.345-.015.345-.213 0-1.18-.85-2.132-1.902-2.132-1.05 0-1.901.953-1.901 2.129 0 .2.196.32.345.216a2.72 2.72 0 0 1 1.556-.495c.572 0 1.104.182 1.557.495M12.736 15.85a.5.5 0 0 1-.103-.011c-.253-.064-.412-.343-.356-.625.18-.897.685-1.593 1.426-1.954.739-.364 1.62-.335 2.248.075.223.145.3.465.17.718-.13.25-.416.335-.642.19-.37-.239-.931-.25-1.4-.02-.326.16-.741.503-.884 1.221-.05.246-.243.413-.456.413zM31.273 15.85c-.213 0-.41-.167-.456-.413-.143-.722-.562-1.06-.884-1.22-.466-.227-1.03-.22-1.4.018-.226.145-.512.06-.642-.19-.13-.249-.053-.573.17-.718.625-.409 1.51-.435 2.248-.074.741.364 1.246 1.057 1.426 1.953.057.283-.103.562-.356.626a.5.5 0 0 1-.103.01z"
          />
          <Path
            fill="#FEFEFE"
            d="M23.127 24.238c.815.049 1.623.194 2.44.175-.056-.688-.096-1.332-.189-2.076h-2.217c-.04.744-.04 1.273-.034 1.901M19.335 24.328c.938-.09 1.866.096 2.803.085.014-.692.014-1.336 0-2.08h-2.676c-.027.744-.077 1.332-.13 1.99z"
          />
        </G>
      </G>
    </G>
    <Defs>
      <ClipPath id="happy_svg__b">
        <Rect width={32} height={32} x={6} y={5} fill="#fff" rx={8} />
      </ClipPath>
      <ClipPath id="happy_svg__c">
        <Rect width={32} height={32} x={6} y={5} fill="#fff" rx={8} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHappy;
