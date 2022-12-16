import { useRef, useEffect } from "react";
import * as d3 from "d3";

const IconArrayByCount = (props) => {
  const svgContainer = useRef(null);
  console.log(props.icon);
  const gap = props.gap || 5;
  const data = d3.range(props.count);
  let highlight = Math.floor((props.pct / 100) * data.length);
  let primaryColor = props.primaryColor || "#202020";
  let secondaryColor = props.secondaryColor || "#fafafa";
  const width = props.width || "100%";
  const height = props.height || "100%";
  const showHighlightFirst = props.showHighlightFirst || false;

  useEffect(() => {
    const svg = d3.select(svgContainer.current);
  });

  useEffect(() => {
    const svg = d3.select(svgContainer.current);
    console.log();
    svg.selectAll("*").remove();
    const margins = { left: 0, top: 5, right: 0, bottom: 5 };
    const width =
      svg.node().getBoundingClientRect().width - margins.left - margins.right;

    let numCols = Math.floor(width / props.iconSize);
    let numRows = Math.ceil(data.length / numCols);
    let height = numRows * (props.iconSize + gap);
    svg.attr("height", height + margins.top);
    let x = d3.scaleBand().range([0, width]).domain(d3.range(numCols));

    let y = d3.scaleBand().range([0, height]).domain(d3.range(numRows));

    let radius = props.iconSize / 2 - gap;

    let icon = svg.append("defs");

    let container = svg
      .append("g")
      .attr("transform", `translate(${margins.left},${margins.top})`);

    if (props.icon) {
      console.log("icon");
      d3.xml(props.icon).then((d) => {
        icon.append(() => {
          return d3
            .select(d.documentElement)
            .select("g")
            .attr("id", "arrayIcon")
            .node();
        });
        let iconBoundingRect = d3
          .select("#arrayIcon")
          .node()
          .getBoundingClientRect();
        let iconScaleWidth = props.iconSize / iconBoundingRect.width;
        let iconScaleHeight = props.iconSize / iconBoundingRect.height;
        let iconScale = d3.min([iconScaleHeight, iconScaleWidth]) * 0.8;

        d3.select("#arrayIcon").attr("transform", `scale(${iconScale})`);

        iconBoundingRect = d3
          .select("#arrayIcon")
          .node()
          .getBoundingClientRect();
        svg.attr("height", height + margins.top + iconBoundingRect.height);

        container
          .selectAll("use")
          .data(data)
          .join("use")
          .attr("xlink:href", "#arrayIcon")
          .attr("x", function (d) {
            return x(d % numCols);
          })
          .attr("y", function (d) {
            return y(Math.floor(d / numCols));
          })
          .attr("fill", function (d) {
            if (showHighlightFirst) {
              return d < highlight ? primaryColor : secondaryColor;
            } else {
              return d < data.length - highlight
                ? secondaryColor
                : primaryColor;
            }
          })
          .style("stroke", "0");
      });
    } else {
      container
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", function (d) {
          return x(d % numCols);
        })
        .attr("cy", function (d) {
          return y(Math.floor(d / numCols));
        })
        .attr("r", radius)
        .attr("fill", function (d) {
          if (showHighlightFirst) {
            return d < highlight ? primaryColor : secondaryColor;
          } else {
            return d < data.length - highlight ? secondaryColor : primaryColor;
          }
        })
        .style("stroke", "0");
    }
  }, [
    data,
    highlight,
    gap,
    props.iconSize,
    props.icon,
    primaryColor,
    secondaryColor,
    showHighlightFirst,
  ]);

  return (
    <div
      style={{
        width: width,
        height: height,
        margin: "0 auto",
        marginBottom: "10px",
      }}
    >
      <svg
        style={{ cursor: "pointer" }}
        width={"100%"}
        // height={"100%"}

        ref={svgContainer}
      ></svg>
    </div>
  );
};

export default IconArrayByCount;
