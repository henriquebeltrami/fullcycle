FROM golang:latest AS builder

WORKDIR /app

COPY go/ /app

RUN CGO_ENABLED=0 GOOS=linux go build -o full_cycle full_cycle_rocks.go

FROM scratch
WORKDIR /app
COPY --from=builder /app/full_cycle ./
CMD [ "./full_cycle" ]