import React from 'react'
import { Bell, ChevronDown, BarChart2, Map, Settings, LogOut, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-800">
      {/* Header */}
      <header className="bg-[#1C3A57] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Exhibit Monitor</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              {/* <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" /> */}
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="sm">
              SAHUF SHAIKH <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dashboard Overview */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Exhibit Status Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-[#56C596] text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">42</p>
                  <p>Functioning</p>
                </div>
                <div className="bg-yellow-400 text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">7</p>
                  <p>Warning</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">3</p>
                  <p>Malfunctioning</p>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Map className="h-16 w-16 text-gray-400" />
                <p className="ml-2 text-gray-500"><img src="https://static.toiimg.com/thumb/61180436/1964903_690211564419369_2857972100364607741_n.jpg?width=1200&height=900" alt="Exhibit A3" /></p>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="bg-[#FF6F3C] text-white p-2 rounded">
                  <p className="font-semibold">Exhibit A3 Malfunction</p>
                  <p className="text-sm">Temperature sensor failure</p>
                </li>
                <li className="bg-yellow-400 text-white p-2 rounded">
                  <p className="font-semibold">Exhibit B7 Warning</p>
                  <p className="text-sm">Humidity levels above threshold</p>
                </li>
                <li className="bg-yellow-400 text-white p-2 rounded">
                  <p className="font-semibold">Exhibit C2 Warning</p>
                  <p className="text-sm">Light exposure nearing limit</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <BarChart2 className="h-16 w-16 text-gray-400" />
                <p className="ml-2 text-gray-500">Performance Chart</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full bg-[#00B4A2] hover:bg-[#009688]">Generate Report</Button>
                <Button className="w-full bg-[#00B4A2] hover:bg-[#009688]">Schedule Maintenance</Button>
                <Button className="w-full bg-[#00B4A2] hover:bg-[#009688]">View All Exhibits</Button>
              </div>
            </CardContent>
          </Card>

          {/* Defective Exhibits */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Defective Exhibits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <img src="https://indiaartfair.in/app/uploads/2018/01/Untitled-3-scaled.jpeg" alt="Exhibit A3" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Exhibit A3</h3>
                    <p className="text-sm text-gray-600 mb-2">Temperature sensor failure</p>
                    <div className="flex items-center text-red-500">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Critical</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Armor_display_-_Glenbow_Museum_-_DSC00713.JPG/800px-Armor_display_-_Glenbow_Museum_-_DSC00713.JPG" alt="Exhibit B7" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Exhibit B7</h3>
                    <p className="text-sm text-gray-600 mb-2">Humidity levels above threshold</p>
                    <div className="flex items-center text-yellow-500">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Warning</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <img src="https://c7.alamy.com/comp/CADNPX/june-30-2010-los-angeles-california-usa-mummy-of-a-human-fetus-which-CADNPX.jpg" alt="Exhibit C2" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Exhibit C2</h3>
                    <p className="text-sm text-gray-600 mb-2">Light exposure nearing limit</p>
                    <div className="flex items-center text-yellow-500">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Warning</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Floating Notification */}
      <div className="fixed bottom-4 right-4 bg-[#FF6F3C] text-white p-4 rounded-lg shadow-lg">
        <h3 className="font-bold mb-2">Urgent: Exhibit A3 Malfunction</h3>
        <p>Immediate attention required. Click for details.</p>
      </div>

      {/* Navigation Sidebar */}
      <nav className="fixed left-0 top-0 bottom-0 w-16 bg-[#1C3A57] text-white flex flex-col items-center py-8 space-y-8">
        <Button variant="ghost" size="icon">
          <BarChart2 className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Map className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6" />
        </Button>
        <div className="flex-grow" />
        <Button variant="ghost" size="icon">
          <LogOut className="h-6 w-6" />
        </Button>
      </nav>
    </div>
  )
}