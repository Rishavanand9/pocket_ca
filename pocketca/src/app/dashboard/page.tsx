'use client'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useState } from 'react'

// Mock data - replace with real data from your API
const portfolioData = [
  { date: '2024-01', value: 30000 },
  { date: '2024-02', value: 32000 },
  { date: '2024-03', value: 31500 },
  { date: '2024-04', value: 34000 },
]

export default function Dashboard() {
  const [selectedAssetType, setSelectedAssetType] = useState('all')
  const [timeRange, setTimeRange] = useState('1M')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-extrabold text-black">PocketCA</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/profile" className="text-black hover:text-gray-900 font-semibold">Profile</Link>
              <Link href="/settings" className="text-black hover:text-gray-900 font-semibold">Settings</Link>
              <Link href="/" className="text-black hover:text-gray-900 font-semibold">Logout</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Quick Actions Bar */}
        <div className="flex space-x-4 mb-8">
          <Link 
            href="/add-investment" 
            className="flex-1 bg-indigo-600 text-white p-4 rounded-lg text-center hover:bg-indigo-700"
          >
            Add New Investment
          </Link>
          <Link 
            href="/set-goals" 
            className="flex-1 bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700"
          >
            Set Financial Goals
          </Link>
          <Link 
            href="/reports" 
            className="flex-1 bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700"
          >
            Generate Reports
          </Link>
        </div>

        {/* Quick Access Tools - New */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-black">
          <Link href="/calculator" className="p-4 bg-white rounded-lg  text-center hover:bg-gray-50">
            <span className="block text-2xl mb-2">🧮</span>
            <span className="font-medium">Investment Calculator</span>
          </Link>
          <Link href="/tax-planning" className="p-4 bg-white rounded-lg  text-center hover:bg-gray-50">
            <span className="block text-2xl mb-2">📑</span>
            <span className="font-medium">Tax Planning</span>
          </Link>
          <Link href="/budget-tracker" className="p-4 bg-white rounded-lg  text-center hover:bg-gray-50">
            <span className="block text-2xl mb-2">💰</span>
            <span className="font-medium">Budget Tracker</span>
          </Link>
          <Link href="/documents" className="p-4 bg-white rounded-lg  text-center hover:bg-gray-50">
            <span className="block text-2xl mb-2">📁</span>
            <span className="font-medium">Documents</span>
          </Link>
        </div>
        
        {/* Financial Goals Progress */}
        <div className="bg-white p-6 rounded-lg  mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Financial Goals Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-black">Retirement Fund</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-sm font-medium text-black mt-1">45% of target</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-black">Emergency Fund</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-sm font-medium text-black mt-1">80% of target</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-black">House Down Payment</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm font-medium text-black mt-1">60% of target</p>
            </div>
          </div>
        </div>

        {/* Investment Performance Section - Enhanced */}
        <div className="bg-white p-6 rounded-lg  mb-8">
          <div className="flex justify-between items-center mb-6">P
            <h2 className="text-2xl font-bold text-black">Portfolio Performance</h2>
            <div className="flex space-x-4">
              <select 
                value={selectedAssetType}
                onChange={(e) => setSelectedAssetType(e.target.value)}
                className="border rounded-md p-2 text-black"
              >
                <option value="all">All Assets</option>
                <option value="stocks">Stocks</option>
                <option value="crypto">Cryptocurrency</option>
                <option value="realestate">Real Estate</option>
                <option value="bonds">Bonds</option>
                <option value="commodities">Commodities</option>
              </select>
              <div className="flex border rounded-md text-black">
                {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-2 ${timeRange === range ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="h-64">
            <LineChart width={800} height={250} data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4F46E5" />
            </LineChart>
          </div>
        </div>

        {/* Risk Analysis Section - New */}
        <div className="bg-white p-6 rounded-lg  mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Risk Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-black">Portfolio Risk Score</h3>
              <p className="text-3xl font-bold text-yellow-600">6.5/10</p>
              <p className="text-sm text-black text-black">Moderate Risk Level</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-black">Diversification Score</h3>
              <p className="text-3xl font-bold text-green-600">8.2/10</p>
              <p className="text-sm text-black text-black">Well Diversified</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-black">Market Exposure</h3>
              <p className="text-3xl font-bold text-blue-600">7.4/10</p>
              <p className="text-sm text-black">Balanced Exposure</p>
            </div>
          </div>
        </div>

        {/* Smart Notifications - New */}
        <div className="bg-white p-6 rounded-lg  mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Smart Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 border rounded-lg bg-yellow-50">
              <span className="text-yellow-600 mr-3">⚠️</span>
              <div>
                <p className="font-semibold text-black">Portfolio Rebalancing Needed</p>
                <p className="text-sm text-black">Your tech allocation is above target. Consider rebalancing.</p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg bg-green-50">
              <span className="text-green-600 mr-3">💡</span>
              <div>
                <p className="font-medium text-black">Investment Opportunity</p>
                <p className="text-sm text-black">Real estate sector showing strong growth potential.</p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg bg-blue-50">
              <span className="text-blue-600 mr-3">📊</span>
              <div>
                <p className="font-medium text-black">Market Update</p>
                <p className="text-sm text-black">Your watchlist stock AAPL is down 5% today.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations and Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-xl font-bold mb-4 text-black">Personalized Recommendations</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="font-medium text-black">Consider diversifying into tech stocks</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="font-medium text-black">Rebalance portfolio to maintain target allocation</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="font-medium text-black">Review real estate investment opportunities</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg text-black">
            <h2 className="text-xl font-bold mb-4 ">Market Insights</h2>
            <ul className="space-y-4">
              <li className="border-b pb-2">
                <p className="font-semibold">Market Trend Analysis</p>
                <p className="text-sm text-black">Bullish momentum in tech sector</p>
              </li>
              <li className="border-b pb-2">
                <p className="font-medium">Risk Assessment</p>
                <p className="text-sm text-black">Current portfolio risk: Moderate</p>
              </li>
              <li>
                <p className="font-medium">Opportunity Alert</p>
                <p className="text-sm text-black">Emerging markets showing growth potential</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Education and Community */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
          <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-xl font-bold mb-4">Learning Resources</h2>
            <div className="space-y-4">
              <Link href="/learn/basics" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-semibold">Investment Basics</h3>
                <p className="text-sm text-black">Learn fundamental investment concepts</p>
              </Link>
              <Link href="/learn/advanced" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-medium">Advanced Strategies</h3>
                <p className="text-sm text-black">Deep dive into complex investment strategies</p>
              </Link>
              <Link href="/learn/market-analysis" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-medium">Market Analysis</h3>
                <p className="text-sm text-black">Understanding market trends and analysis</p>
              </Link>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg text-black">
            <h2 className="text-lg font-semibold mb-4">Community Insights</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <p className="font-medium">Latest Discussions</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm text-black">📈 Market outlook for 2024</li>
                  <li className="text-sm text-black">💡 Best practices for portfolio diversification</li>
                  <li className="text-sm text-black">🏠 Real estate investment strategies</li>
                </ul>
              </div>
              <Link href="/community" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                Join Community Discussions
              </Link>
            </div>
          </div>
        </div>


      </main>
    </div>
  )
}