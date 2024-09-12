'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertTriangle, ThumbsUp, Activity, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AIInsights() {
  const [timeRange, setTimeRange] = useState('1week')
  const [confidenceThreshold, setConfidenceThreshold] = useState(70)
  const [predictions, setPredictions] = useState(null)
  const [showExplainer, setShowExplainer] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPredictions()
  }, [timeRange])

  const fetchPredictions = async () => {
    setLoading(true)
    // Simulated API call
    setTimeout(() => {
      const data = {
        exhibitFailurePredictions: [
          { name: 'Exhibit A', probability: 0.2 },
          { name: 'Exhibit B', probability: 0.5 },
          { name: 'Exhibit C', probability: 0.1 },
          { name: 'Exhibit D', probability: 0.8 },
        ],
        maintenanceSchedule: [
          { name: 'Week 1', aiRecommended: 3, traditional: 2 },
          { name: 'Week 2', aiRecommended: 2, traditional: 3 },
          { name: 'Week 3', aiRecommended: 4, traditional: 2 },
          { name: 'Week 4', aiRecommended: 3, traditional: 4 },
        ],
        outcomes: [
          { date: '2023-01', predicted: 95, actual: 92 },
          { date: '2023-02', predicted: 88, actual: 89 },
          { date: '2023-03', predicted: 92, actual: 95 },
          { date: '2023-04', predicted: 96, actual: 94 },
        ],
        actionItems: [
          { description: 'Schedule maintenance for Exhibit D', confidence: 95 },
          { description: 'Increase staff for Week 3', confidence: 85 },
          { description: 'Update visitor guide for Exhibit A', confidence: 75 },
          { description: 'Review feedback for Exhibit B', confidence: 65 },
        ],
      }
      setPredictions(data)
      setLoading(false)
    }, 1000)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Insights Dashboard</h1>
      
      <div className="mb-6 flex items-center space-x-4">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1week">1 Week</SelectItem>
            <SelectItem value="1month">1 Month</SelectItem>
            <SelectItem value="3months">3 Months</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => setShowExplainer(!showExplainer)}>
          {showExplainer ? 'Hide AI Explainer' : 'Show AI Explainer'}
        </Button>
      </div>

      {showExplainer && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 text-purple-500" />
              How Our AI Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our AI model uses advanced machine learning algorithms to analyze historical data, current sensor readings, and visitor feedback to predict potential exhibit issues and optimize maintenance schedules. It continuously learns from new data to improve its predictions over time.</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 text-yellow-500" />
              Exhibit Failure Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={predictions.exhibitFailurePredictions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="probability" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 text-blue-500" />
              AI-Optimized Maintenance Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictions.maintenanceSchedule}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="aiRecommended" stroke="#8884d8" />
                <Line type="monotone" dataKey="traditional" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ThumbsUp className="mr-2 text-green-500" />
              Predicted vs Actual Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictions.outcomes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="predicted" stroke="#8884d8" />
                <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>AI Confidence Threshold</CardTitle>
        </CardHeader>
        <CardContent>
          <Slider
            value={[confidenceThreshold]}
            onValueChange={(value) => setConfidenceThreshold(value[0])}
            max={100}
            step={1}
          />
          <p className="mt-2">Current threshold: {confidenceThreshold}%</p>
          <p className="text-sm text-gray-500">Adjust the confidence threshold to filter AI predictions.</p>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>AI-Generated Action Items</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {predictions.actionItems.filter(item => item.confidence >= confidenceThreshold).map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.description} (Confidence: {item.confidence}%)
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
