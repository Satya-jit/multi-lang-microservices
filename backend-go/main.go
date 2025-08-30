package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "os"
)

type HealthResponse struct {
    Service string `json:"service"`
    Status  string `json:"status"`
    Version string `json:"version"`
}

func enableCORS(w http.ResponseWriter) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    enableCORS(w)
    fmt.Fprint(w, "Go Backend is running!")
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    enableCORS(w)
    fmt.Fprint(w, "Hello from Go! 🚀")
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
    enableCORS(w)
    w.Header().Set("Content-Type", "application/json")
    
    response := HealthResponse{
        Service: "go-backend",
        Status:  "healthy",
        Version: "1.0.0",
    }
    
    json.NewEncoder(w).Encode(response)
}

func main() {
    port := os.Getenv("PORT")
    if port == "" {
        port = "8090"
    }

    http.HandleFunc("/", homeHandler)
    http.HandleFunc("/hello", helloHandler)
    http.HandleFunc("/health", healthHandler)

    log.Printf("Go server starting on port %s", port)
    log.Fatal(http.ListenAndServe(":"+port, nil))
}
