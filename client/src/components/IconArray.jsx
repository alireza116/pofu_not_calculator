import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const IconArray = (props) => {
  const svgContainer = useRef(null);
  const numCols = props.numCols || 10;
  const numRows = props.numRows || 10;

  const data = d3.range(numCols * numRows);
  let highlight = Math.floor((props.pct / 100) * data.length);
  console.log(highlight);

  const width = props.width || "100%";
  const height = props.height || "100%";

  useEffect(() => {
    const svg = d3.select(svgContainer.current);
    //   .style("background-color", "lightgrey");
    svg.select("g").remove();
    const margins = { left: 10, top: 10, right: 10, bottom: 10 };
    const width =
      svg.node().getBoundingClientRect().width - margins.left - margins.right;
    //height of svg
    const height =
      svg.node().getBoundingClientRect().height - margins.top - margins.bottom;

    let x = d3.scaleBand().range([0, width]).domain(d3.range(numCols));

    let y = d3.scaleBand().range([0, height]).domain(d3.range(numRows));

    let radiusw = width / numCols / 2;
    let radiush = height / numRows / 2;

    let radius = d3.min([radiush, radiusw]) - 1;

    let container = svg
      .append("g")
      .attr(
        "transform",
        `translate(${margins.left + radius},${margins.top + radius})`
      );

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
        return d < highlight ? "teal" : "gray";
      })
      .style("stroke", "0");
  }, [data, numCols, numRows, highlight]);

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
        height={"100%"}
        ref={svgContainer}
      />
    </div>
  );
};

export default IconArray;
