import styles from './Graph.module.css';
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export default function Graph({ data, setdata }) {
  const chartRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions based on the container size
    const updateDimensions = () => {
      const container = chartRef.current.parentNode; // Get the parent container of the chart
      setDimensions({
        width: container.offsetWidth, // Get the width of the container
        height: container.offsetHeight, // Get the height of the container
      });
    };

    // Update dimensions on window resize
    window.addEventListener('resize', updateDimensions);

    // Call the updateDimensions function initially
    updateDimensions();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    const margin = { top: 10, right: 10, bottom: 30, left: 40 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    // Clear the previous chart
    d3.select(chartRef.current).selectAll('*').remove();

    // Create SVG
    const svg = d3.select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define the fixed Y-axis domain (0% to 150%)
    const yScale = d3.scaleLinear()
      .domain([0, 150]) // Fixed range from 0% to 150%
      .range([height, 0])
      .clamp(true); // Ensure values outside the domain are clamped

    // X-axis Scale
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.name)) // Use `name` from the data for X-axis labels
      .range([0, width])
      .padding(0.01);

    // Add Y-axis with fixed ticks (0%, 25%, 50%, 75%, 100%, 125%, 150%)
    svg.append('g')
      .call(d3.axisLeft(yScale)
        .ticks(7) // Set 7 ticks for the Y-axis (0%, 25%, 50%, 75%, 100%, 125%, 150%)
        .tickValues([0, 25, 50, 75, 100, 125, 150]) // Explicitly set the tick values
        .tickFormat((d) => `${d}%`)); // Format ticks as percentages

    // Add X-axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Add Bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.name)) // Position each bar based on the `name` property
      .attr('y', d => yScale(d.value)) // Position the bar based on the `value`
      .attr('width', xScale.bandwidth()) // Bar width based on scale
      .attr('height', d => Math.max(0, height - yScale(d.value))) // Ensure non-negative height
      .attr('fill', 'violet');
  }, [data, dimensions]); // Re-run effect whenever `data` or `dimensions` change

  return (
    <div className={styles.itemsContainer}>
      {console.log(data)}
      <svg ref={chartRef}></svg>
    </div>
  );
}
