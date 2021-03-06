export default {
  title: 'How to export a D3 line chart into a PNG on nodejs?',
  slug: 'export-D3-chart-png',
  html: `
    <p>
      D3 is a very nice javascript library that helps to generate all sorts of charts.
    </p>

    <p>
      D3 is mainly used on the browser but there are times we need
      to pre-generate the chart and save it as an image so that it can be easily download it
      or publish it. In my case I wanted to publish the image into a social media account.
    </p>

    <p>
      You can find the source code on <a href="https://github.com/garciadiazjaime/demo-d3" target="_blank" rel="nofollow">github</a>.
      Once you clone it, remember to run: <i>npm install</i>.
      <br />
      In the next steps I'm going to mention some importante pieces.
    </p>

    <br />

    <h2>1) We need data. </h2>
    <p>
      In this case I made it up, but in a real example
      this might come out of an API endpoint, CSV file or any other source.
      Regardles of the source you should end it up with a similar
      structure: <br /><br />
      <i>An array of objects where each object has at least two properties,
      one property per axe (X, Y).</i>
    </p>

    <pre>
    const data = [{
        label: 'label 1',
        value: 10
      },
      {
        label: 'label 2',
        value: 20
      },
      {
        label: 'label 3',
        value: 40
      },
    ]
    </pre>

    <br />


    <h2>2) Use D3 to generate a line chart.</h2>
    <p>
      a) <b>d3-node</b> (npm package) generates a D3Node on the server side
    </p>
    <pre>
    const d3n = new D3Node({
      selector: _selector,
      container: _container,
    })
    const { d3 } = d3n
    </pre>

    <p>
      b) Create a SVG providing a width and a height.
    </p>
    <pre>
    const svg = d3n.createSVG(width, height)
    </pre>

    <p>
      c) Define the axes. 
      <br />
      Notice how <b>label</b> and <b>value</b> are used (properties from our data).
    </p>
    <pre>
    const xScale = d3.scaleBand()
      .domain(data.map(d => <b>d.label</b>))
      .rangeRound([0, width])
  
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => <b>d.value</b>)])
      .rangeRound([height, 0])
    </pre>

    <p>
      d) Render the data. <br /> Notices how <b>data</b> is passed.
    </p>
    <pre>
    g.append('g')
      .attr('fill', 'none')
      .selectAll('path')
      .data([<b>data</b>])
      .enter()
      .append('path')
    </pre>

    
    <br />

    <h2>3) Use puppeteer (npm package) to generate the imagee</h2>
    <p>
      In this case <b>html</b> is the equivalent to <b>d3n.html()</b>.
      D3 has an <i>html()</i> method that provides the html generated by the cart.
    </p>
    <pre>
    const browser = await puppeteer.launch()

    const page = await browser.newPage()
  
    page.setContent(html)
  
    await page.screenshot({ path })
    </pre>


    <br />
    <p>
      That's it :) if you executed the code you should have generated an image like this one:

      <br /><br />

      <img src="/line-chart.png" alt="D3 line chart demo" />
    </p>
  `
}
